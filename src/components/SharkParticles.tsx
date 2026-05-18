"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader, MeshSurfaceSampler } from "three-stdlib";
import type { MotionValue } from "framer-motion";

interface SharkParticlesProps {
  /** Number of particles to render. High counts are supported (e.g. 10000). */
  particleCount?: number;
  /** Primary color for the gradient. */
  primaryColor?: string;
  /** Secondary color for the gradient. */
  secondaryColor?: string;
  /** The radius around the mouse where particles are repelled. */
  mouseRepelRadius?: number;
  /** The strength of the repulsion. */
  mouseRepelForce?: number;
  /** How quickly particles return to their original position. */
  returnForce?: number;
  /** Friction applied to particle velocity. */
  friction?: number;
  /**
   * Page dive progress (0 = top/surface, 1 = bottom/abyss). Drives the
   * scatter → assemble → swim → dissolve story instead of an in-view trigger.
   */
  progress?: MotionValue<number>;
  /** Enable cursor repulsion (desktop only — disabled for reduced motion). */
  interactive?: boolean;
  /** Render a single static assembled silhouette with no simulation. */
  staticAssembled?: boolean;
  /** Extra CSS classes for the container. */
  className?: string;
}

// Smooth 0..1 ramp.
function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * How tightly particles hold the shark shape at a given dive progress:
 *  - scattered near the surface (hero)
 *  - assembles as the origin story arrives
 *  - holds through the platform / open-data chapters
 *  - dissolves into a sparse data cloud in the deep
 */
function cohesionFor(p: number) {
  // Coalesce out of the deep as the water turns blue, hold through the
  // abyss, loosen only slightly at the very bottom.
  const assemble = smoothstep(0.44, 0.62, p);
  const dissolve = 1 - 0.45 * smoothstep(0.9, 1.0, p);
  return Math.min(assemble, dissolve);
}

export const SharkParticles: React.FC<SharkParticlesProps> = ({
  particleCount = 15000,
  primaryColor = "#00f2fe",
  secondaryColor = "#4facfe",
  mouseRepelRadius = 1.0,
  mouseRepelForce = 0.3,
  returnForce = 0.01,
  friction = 0.9,
  progress,
  interactive = true,
  staticAssembled = false,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  // Mirror the scroll MotionValue into a ref the rAF loop can read cheaply.
  useEffect(() => {
    if (!progress) return;
    progressRef.current = progress.get();
    const unsub = progress.on("change", (v) => {
      progressRef.current = v;
    });
    return unsub;
  }, [progress]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // 1. Setup Three.js Scene
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 10; // Adjusted to prevent clipping
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    let particles: THREE.Points;
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const mouse = new THREE.Vector2(-999, -999);
    const targetMouse = new THREE.Vector2(-999, -999);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();

    // Data structures for particles
    let positions: Float32Array;
    let basePositions: Float32Array;
    let velocities: Float32Array;
    let chaos: Float32Array;

    // 2. Load GLB and Sample Points
    const loader = new GLTFLoader();
    loader.load(
      "/models/shark.glb",
      (gltf) => {
        let targetMesh: THREE.Mesh | null = null;

        // Find the first mesh in the model
        gltf.scene.traverse((child) => {
          if (!targetMesh && (child as THREE.Mesh).isMesh) {
            targetMesh = child as THREE.Mesh;
          }
        });

        if (!targetMesh) {
          console.error("No mesh found in the GLB file.");
          return;
        }

        // We want to center the mesh and scale it so it looks good in the viewport
        const mesh = targetMesh as THREE.Mesh;
        const geom = mesh.geometry as THREE.BufferGeometry;
        geom.computeBoundingBox();
        const boundingBox = geom.boundingBox!;
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        geom.translate(-center.x, -center.y, -center.z);

        // Optionally compute scale to fit a standard size (e.g., radius of 4)
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        const desiredSize = 16; // Perfect size to fill canvas without clipping
        const scale = desiredSize / maxDim;
        geom.scale(scale, scale, scale);

        // Rotate it to face nicely (standard side profile, swimming right-to-left)
        geom.rotateY(-Math.PI / 2);

        // Shift it slightly to the right to avoid clipping on the left edge
        geom.translate(2.5, 0, 0);

        // Create Surface Sampler
        const sampler = new MeshSurfaceSampler(mesh).build();

        // Setup Particle Buffers
        positions = new Float32Array(particleCount * 3);
        basePositions = new Float32Array(particleCount * 3);
        velocities = new Float32Array(particleCount * 3);
        chaos = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const c1 = new THREE.Color(primaryColor);
        const c2 = new THREE.Color(secondaryColor);
        const samplePosition = new THREE.Vector3();

        for (let i = 0; i < particleCount; i++) {
          sampler.sample(samplePosition);

          const ix = i * 3;
          const iy = ix + 1;
          const iz = ix + 2;

          // Scatter particles wildly on load so they can assemble into the shark
          const spread = 40.0;
          basePositions[ix] = samplePosition.x;
          basePositions[iy] = samplePosition.y;
          basePositions[iz] = samplePosition.z;

          if (staticAssembled) {
            positions[ix] = samplePosition.x;
            positions[iy] = samplePosition.y;
            positions[iz] = samplePosition.z;
          } else {
            positions[ix] = samplePosition.x + (Math.random() - 0.5) * spread;
            positions[iy] = samplePosition.y + (Math.random() - 0.5) * spread;
            positions[iz] = samplePosition.z + (Math.random() - 0.5) * spread;
          }

          chaos[ix] = (Math.random() - 0.5) * 2.0;
          chaos[iy] = (Math.random() - 0.5) * 2.0;
          chaos[iz] = (Math.random() - 0.5) * 2.0;

          // Gradient based on X position
          const mixedColor = c1
            .clone()
            .lerp(c2, (samplePosition.x + desiredSize / 2) / desiredSize);
          colors[ix] = mixedColor.r;
          colors[iy] = mixedColor.g;
          colors[iz] = mixedColor.b;

          sizes[i] = Math.random() * 1.5 + 0.2;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3),
        );
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
          },
          vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (20.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
          fragmentShader: `
          uniform float uTime;
          varying vec3 vColor;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float alpha = smoothstep(0.5, 0.2, dist);
            gl_FragColor = vec4(vColor * 1.5, alpha); // Boost color brightness
          }
        `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        if (staticAssembled) {
          // No simulation — render the assembled silhouette once.
          particles.rotation.y = Math.PI / 8;
          renderer.render(scene, camera);
        } else {
          animate();
        }
      },
      undefined,
      (error) => {
        console.error("Error loading shark GLB:", error);
      },
    );

    // 3. Interaction Logic
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      const target = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, target);

      if (target) {
        targetMouse.x = target.x;
        targetMouse.y = target.y;
      }
    };

    const handleMouseLeave = () => {
      targetMouse.x = -999;
      targetMouse.y = -999;
    };

    if (interactive && !staticAssembled) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    // 4. Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          camera.aspect = width / height;

          // Specific responsive camera ranges
          if (width <= 580 && width > 520) {
            camera.position.z = 12;
          } else if (width <= 520 && width > 440) {
            camera.position.z = 14;
          } else if (width <= 440) {
            camera.position.z = 18;
          } else if (width >= 1024 && width <= 1100) {
            camera.position.z = 16;
          }

          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
          if (staticAssembled && particles) {
            renderer.render(scene, camera);
          }
        }
      }
    });
    resizeObserver.observe(container);

    // 5. Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!particles) return;

      const p = progressRef.current;
      // The shark only lives in the blue/deep water. On the bright surface
      // (or when the tab is hidden) skip the entire particle simulation and
      // GPU upload — the layer is invisible there, so this is the main
      // performance win for the hero / early chapters.
      if (document.hidden || p < 0.4) return;

      const material = particles.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = clock.getElapsedTime();

      // 0 = scattered, 1 = locked into the shark shape.
      const cohesion = cohesionFor(p);
      // Outward drift as the shark dissolves into the data cloud in the deep.
      const disperse = smoothstep(0.7, 0.98, p);

      // Smooth mouse tracking
      if (targetMouse.x !== -999) {
        mouse.lerp(targetMouse, 0.15);
      } else {
        mouse.set(-999, -999);
      }

      const posArray = particles.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = ix + 1;
        const iz = ix + 2;

        const px = posArray[ix];
        const py = posArray[iy];
        const pz = posArray[iz];

        const bx = basePositions[ix];
        const by = basePositions[iy];
        const bz = basePositions[iz];

        // Apply slight gentle sine wave motion for the "water" effect based on original position
        const time = clock.getElapsedTime();
        const floatY = Math.sin(time * 2.0 + bx * 0.5) * 0.05;
        const currentBy = by + floatY;

        let fx = 0;
        let fy = 0;
        let fz = 0;

        // 1. Mouse Repulsion Force
        if (mouse.x !== -999) {
          // Check distance from the BASE position to the mouse, not current position!
          // This keeps particles agitated as long as the mouse is over their original spot.
          const dxBase = bx - mouse.x;
          const dyBase = by - mouse.y;
          const distSqBase = dxBase * dxBase + dyBase * dyBase;

          // Randomize the radius per particle to completely break any "circle" shape
          const individualRadius =
            mouseRepelRadius * (0.8 + Math.abs(chaos[ix]) * 1.5);

          if (distSqBase < individualRadius * individualRadius) {
            const distBase = Math.sqrt(distSqBase) + 0.001;
            const force = Math.pow(
              (individualRadius - distBase) / individualRadius,
              2,
            );

            // Dynamic, time-based chaos so they swarm endlessly like angry bees
            const activeChaosX = Math.sin(time * 5.0 + chaos[ix] * 20.0);
            const activeChaosY = Math.cos(time * 5.5 + chaos[iy] * 20.0);
            const activeChaosZ = Math.sin(time * 6.0 + chaos[iz] * 20.0);

            // Direct massive velocity injection away from base and randomly
            velocities[ix] +=
              ((dxBase / distBase) * 0.3 + activeChaosX * 1.5) *
              force *
              mouseRepelForce *
              10.0;
            velocities[iy] +=
              ((dyBase / distBase) * 0.3 + activeChaosY * 1.5) *
              force *
              mouseRepelForce *
              10.0;
            velocities[iz] +=
              activeChaosZ * 3.0 * force * mouseRepelForce * 15.0;
          }
        }

        // 2. Return-to-shape force, scaled by how cohesive the dive wants it.
        if (cohesion > 0.001) {
          const r = returnForce * cohesion;
          fx += (bx - px) * r;
          fy += (currentBy - py) * r;
          fz += (bz - pz) * r;
        }

        // 3. Dissolve — drift outward into a sparse data cloud in the deep.
        if (disperse > 0.001) {
          const t = time * 0.5;
          fx += Math.sin(t + chaos[ix] * 12.0) * 0.012 * disperse;
          fy += Math.cos(t + chaos[iy] * 12.0) * 0.012 * disperse;
          fz += Math.sin(t + chaos[iz] * 12.0) * 0.012 * disperse;
        }

        // Apply forces to velocity
        velocities[ix] += fx;
        velocities[iy] += fy;
        velocities[iz] += fz;

        // Apply friction
        velocities[ix] *= friction;
        velocities[iy] *= friction;
        velocities[iz] *= friction;

        // Update positions
        posArray[ix] += velocities[ix];
        posArray[iy] += velocities[iy];
        posArray[iz] += velocities[iz];
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Gentle swim: the whole shark drifts and banks as the dive progresses.
      const t = clock.getElapsedTime();
      particles.position.x = Math.sin(t * 0.15) * 0.6 - p * 1.2;
      particles.position.y = Math.sin(t * 0.3) * 0.25;
      particles.rotation.y = Math.sin(t * 0.2) * 0.05 + Math.PI / 8;
      particles.rotation.x = Math.cos(t * 0.15) * 0.02;
      particles.rotation.z = Math.sin(t * 0.12) * 0.03;

      renderer.render(scene, camera);
    };

    // 6. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);

      renderer.dispose();
      if (particles) {
        particles.geometry.dispose();
        (particles.material as THREE.Material).dispose();
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    particleCount,
    primaryColor,
    secondaryColor,
    mouseRepelRadius,
    mouseRepelForce,
    returnForce,
    friction,
    interactive,
    staticAssembled,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ overflow: "hidden" }}
    />
  );
};

export default SharkParticles;

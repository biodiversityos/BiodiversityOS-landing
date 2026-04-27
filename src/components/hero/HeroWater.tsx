"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Wave effect — continuous expanding disc wave (not separate rings).
 * Uses DOM-level mouse tracking so the canvas can sit ON TOP of text
 * with pointer-events: none and still follow the cursor.
 */

const MAX_TRAIL = 64;

// Global mouse UV so the mesh can read it without raycasting
const globalMouse = { x: -10, y: -10 };
const prevMouse = { x: -10, y: -10 };

const WaterEffect = () => {
  const shaderRef = useRef<THREE.ShaderMaterial>(null);
  const trailIndex = useRef(0);
  const { size } = useThree();

  const trailPositions = useMemo(
    () => Array.from({ length: MAX_TRAIL }, () => new THREE.Vector2(-10, -10)),
    [],
  );
  const trailOpacities = useMemo(() => new Float32Array(MAX_TRAIL).fill(0), []);

  const geometry = useMemo(() => {
    // 200x120 grid — very small triangles
    let plane: THREE.BufferGeometry = new THREE.PlaneGeometry(50, 30, 200, 120);

    const pos = plane.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      if (x > -24.5 && x < 24.5 && y > -14.5 && y < 14.5) {
        pos.setX(i, x + (Math.random() - 0.5) * 0.08);
        pos.setY(i, y + (Math.random() - 0.5) * 0.08);
      }
    }

    plane = plane.toNonIndexed();

    const count = plane.attributes.position.count;
    const bary = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 3) {
      bary[i * 3] = 1;
      bary[i * 3 + 1] = 0;
      bary[i * 3 + 2] = 0;
      bary[(i + 1) * 3] = 0;
      bary[(i + 1) * 3 + 1] = 1;
      bary[(i + 1) * 3 + 2] = 0;
      bary[(i + 2) * 3] = 0;
      bary[(i + 2) * 3 + 1] = 0;
      bary[(i + 2) * 3 + 2] = 1;
    }

    plane.setAttribute("aBary", new THREE.BufferAttribute(bary, 3));
    return plane;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTrail: { value: trailPositions },
      uTrailOpacity: { value: trailOpacities },
    }),
    [trailPositions, trailOpacities],
  );

  const vertexShader = `
    attribute vec3 aBary;
    varying vec3 vBary;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vBary = aBary;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader: each trail point creates a FILLED expanding disc.
  // Overlapping discs merge via max() to create one continuous wave.
  const fragmentShader = `
    uniform vec2 uTrail[${MAX_TRAIL}];
    uniform float uTrailOpacity[${MAX_TRAIL}];

    varying vec3 vBary;
    varying vec2 vUv;

    void main() {
      float aspect = 1.6666;
      vec2 uv = vec2(vUv.x * aspect, vUv.y);

      // Build a single continuous wave field from all trail points
      float wave = 0.0;
      for (int i = 0; i < ${MAX_TRAIL}; i++) {
        if (uTrailOpacity[i] <= 0.0) continue;

        vec2 tp = vec2(uTrail[i].x * aspect, uTrail[i].y);
        float d = distance(uv, tp);

        float age = 1.0 - uTrailOpacity[i]; // 0 = fresh, 1 = dead

        // Expanding disc radius
        float radius = age * 0.2;

        // Filled disc with soft edge
        float disc = smoothstep(radius + 0.04, radius - 0.01, d);

        // Strength fades as the point ages
        float strength = disc * uTrailOpacity[i];

        // max() blending: overlapping discs merge into one shape
        wave = max(wave, strength);
      }

      // --- wireframe ---
      float edgeW = 0.025;
      float edge = min(vBary.x, min(vBary.y, vBary.z));
      float edgeLine = 1.0 - smoothstep(0.0, edgeW, edge);

      float vert = max(vBary.x, max(vBary.y, vBary.z));
      float vertDot = smoothstep(0.88, 1.0, vert);

      float wireframe = max(edgeLine * 0.4, vertDot * 1.0);

      // Very faint base grid (increased visibility)
      float baseAlpha = wireframe * 0.05;

      // Wave lights up the wireframe (increased intensity)
      float waveAlpha = wave * wireframe * 1.5;

      float alpha = baseAlpha + waveAlpha;

      // Subtle ocean-matching color (made brighter)
      vec3 color = vec3(0.35, 0.85, 1.0);

      gl_FragColor = vec4(color, alpha);
    }
  `;

  useFrame((_, delta) => {
    if (!shaderRef.current) return;

    const opacities = shaderRef.current.uniforms.uTrailOpacity.value;

    // Fade existing trail (slowed down for visibility)
    for (let i = 0; i < MAX_TRAIL; i++) {
      opacities[i] = Math.max(0, opacities[i] - delta * 0.4);
    }

    // Drop trail points as cursor moves
    const dx = globalMouse.x - prevMouse.x;
    const dy = globalMouse.y - prevMouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 0.01 && globalMouse.x > -5) {
      const steps = Math.min(
        MAX_TRAIL / 2,
        Math.max(1, Math.floor(dist / 0.01)),
      );
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        const idx = trailIndex.current;
        trailPositions[idx].set(prevMouse.x + dx * t, prevMouse.y + dy * t);
        opacities[idx] = 1.0;
        trailIndex.current = (idx + 1) % MAX_TRAIL;
      }
      prevMouse.x = globalMouse.x;
      prevMouse.y = globalMouse.y;
    }
  });

  return (
    <mesh>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

export default function HeroWater() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track mouse at DOM level so canvas can be pointer-events:none
  // and still sit ON TOP of text content
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.closest("section") || container.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();

      // Convert screen position to NDC (-1 to 1)
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Camera frustum: visible world bounds at z=0
      const fov = (60 * Math.PI) / 180;
      const camZ = 15;
      const aspect = rect.width / rect.height;
      const halfH = camZ * Math.tan(fov / 2); // ~8.66
      const halfW = halfH * aspect;

      // World position on the z=0 plane
      const worldX = ndcX * halfW;
      const worldY = ndcY * halfH;

      // Convert to mesh UV: mesh is PlaneGeometry(50, 30)
      // so X goes from -25 to 25, Y goes from -15 to 15
      globalMouse.x = (worldX + 25) / 50;
      globalMouse.y = (worldY + 15) / 30;
    };

    const onLeave = () => {
      globalMouse.x = -10;
      globalMouse.y = -10;
      prevMouse.x = -10;
      prevMouse.y = -10;
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-30 overflow-hidden pointer-events-none"
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[0.75, 1.5]}>
        <WaterEffect />
      </Canvas>
    </div>
  );
}

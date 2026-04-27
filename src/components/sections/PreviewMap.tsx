"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icons in Leaflet + Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MOCK_POINTS = [
  { id: 1, lat: 20.37, lng: -87.04 },
  { id: 2, lat: 20.45, lng: -87.10 },
  { id: 3, lat: 20.30, lng: -86.95 },
  { id: 4, lat: 20.50, lng: -87.20 },
  { id: 5, lat: 20.25, lng: -87.15 },
];

export default function PreviewMap() {
  return (
    <MapContainer
      center={[20.37, -87.04]}
      zoom={10}
      style={{ width: "100%", height: "100%" }}
      zoomControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {MOCK_POINTS.map((point) => (
        <Marker key={point.id} position={[point.lat, point.lng]} icon={customIcon} />
      ))}
    </MapContainer>
  );
}

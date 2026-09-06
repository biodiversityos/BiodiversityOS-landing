"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Leaflet + Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// The eight Cozumel dive sites with the most recorded sightings. Real
// coordinates from the survey, so the preview is not inventing locations.
const PREVIEW_SITES = [
  { id: 1, name: "Yucab",                    lat: 20.42303, lng: -87.01637 },
  { id: 2, name: "Paraiso Bajo",             lat: 20.46942, lng: -86.98147 },
  { id: 3, name: "Punta Sur",                lat: 20.30306, lng: -87.02500 },
  { id: 4, name: "Cedral Cordillera",        lat: 20.37439, lng: -87.02891 },
  { id: 5, name: "Cuevas",                   lat: 20.32806, lng: -87.02694 },
  { id: 6, name: "Paso del Cedral",          lat: 20.37028, lng: -87.02833 },
  { id: 7, name: "Paso del Cedral Profundo", lat: 20.37552, lng: -87.02984 },
  { id: 8, name: "Santa Rosa",               lat: 20.37972, lng: -87.02917 },
];

// CARTO serves an "API KEY REQUIRED" watermark without a key, and Esri's Ocean
// basemap has no data over Cozumel — both at HTTP 200, so they fail silently.
const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services";

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
      <TileLayer url={`${ESRI}/World_Imagery/MapServer/tile/{z}/{y}/{x}`} maxZoom={18} />
      <TileLayer url={`${ESRI}/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}`} maxZoom={18} />
      {PREVIEW_SITES.map((site) => (
        <Marker
          key={site.id}
          position={[site.lat, site.lng]}
          icon={customIcon}
          title={site.name}
        />
      ))}
    </MapContainer>
  );
}

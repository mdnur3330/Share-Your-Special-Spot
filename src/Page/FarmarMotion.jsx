// components/BangladeshMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const locations = [
  { name: "Cox's Bazar", lat: 21.4272, lng: 92.0058 },
  { name: "Sajek Valley", lat: 23.3811, lng: 92.2931 },
  { name: "Saint Martin", lat: 20.6050, lng: 92.3221 },
  { name: "Sundarbans", lat: 22.0173, lng: 89.5020 },
  { name: "Nilgiri, Bandarban", lat: 21.7622, lng: 92.3694 },
  { name: "Mahasthangarh", lat: 24.9573, lng: 89.3454 },
  { name: "Sonargaon", lat: 23.6434, lng: 90.5989 },
  { name: "Aamjhupi Meherpur", lat: 23.7584, lng: 88.6316 },
];

const BangladeshMap = () => {
  return (
    <div className="w-full h-[600px] rounded-xl shadow-lg overflow-hidden border border-blue-300">
      <MapContainer center={[23.6850, 90.3563]} zoom={6} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]} icon={customIcon}>
            <Popup>
              <span className="font-semibold text-blue-700">{loc.name}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;

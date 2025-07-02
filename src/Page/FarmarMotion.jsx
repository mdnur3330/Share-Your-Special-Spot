
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Tourist spots with coordinates
const locations = [
  { name: "Cox's Bazar", lat: 21.4272, lng: 92.0058 },
  { name: "Sajek Valley", lat: 23.3811, lng: 92.2931 },
  { name: "Saint Martin", lat: 20.605, lng: 92.3221 },
  { name: "Sundarbans", lat: 22.0173, lng: 89.502 },
  { name: "Nilgiri, Bandarban", lat: 21.7622, lng: 92.3694 },
  { name: "Mahasthangarh", lat: 24.9573, lng: 89.3454 },
  { name: "Sonargaon", lat: 23.6434, lng: 90.5989 },
  { name: "Aamjhupi Meherpur", lat: 23.7584, lng: 88.6316 },
  { name: "Lalbagh Fort", lat: 23.7196, lng: 90.388 },
  { name: "Jaflong", lat: 25.1635, lng: 92.0165 },
  { name: "Rangamati", lat: 22.7324, lng: 92.2985 },
  { name: "Mainamati, Comilla", lat: 23.4607, lng: 91.1809 },
];

const BangladeshMap = () => {
  return (
    <section className="bg-gradient-to-b from-[#d0ecff] via-white to-[#d0ecff] py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#045b96]">
          🗺️ Bangladesh Travel Map
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          Explore the beauty of Bangladesh! Click on each marker to discover famous historical and tourist spots across the country.
        </p>
      </div>
      <div className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden border border-blue-300">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={6}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
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
    </section>
  );
};

export default BangladeshMap;


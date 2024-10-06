import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Maps() {
  return (
    <MapContainer
      center={[-6.301569385166238, 107.03114724599455]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[400px] w-full rounded-xl shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-6.301569385166238, 107.03114724599455]}>
        <Popup>Jl. Haji Makmur, Rt 11, Rw 08, Bekasi, Jawa Barat</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;

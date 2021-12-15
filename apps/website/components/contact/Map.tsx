import { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position: [number, number] = [51.505, -0.09];

const Map: FC = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

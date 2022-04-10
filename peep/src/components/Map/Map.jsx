import React from "react";
import {
  GoogleMap,
  LoadScript,
  // Marker,
  // withScriptsjs,
  // withGooleMap,
} from "@react-google-maps/api";
// import { MAP_SETTINGS } from "../../constants";
// import { MOCK_DESTINATIONS_DATA, MOCK_ORIGINS_DATA } from "./MockData";

// const { DEFAULT_MAP_OPTIONS } = MAP_SETTINGS;

const MapContainer = () => {
  // const mapRef = React.useRef(null);

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
        // defaultOptions={{...DEFAULT_MAP_OPTIONS, styles: mapStyles}}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }}
      ></GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;

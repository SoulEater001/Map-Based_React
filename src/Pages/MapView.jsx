import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Styles for the map container
const mapContainerStyle = {
  height: '100vh',
  width: '100%',
};

// Default location in case geolocation is not supported or denied
const defaultCenter = {
  lat: 26.7541, // Example latitude (NIELIT Gorakhpur area)
  lng: 83.3732, // Example longitude
};

const MapView = () => {
  const [userPosition, setUserPosition] = useState(null);

  // Get the user's current position
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userPosition || defaultCenter}
        zoom={16} // Adjust zoom level based on preference
      >
        {/* Marker for user's current location */}
        {userPosition && <Marker position={userPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;

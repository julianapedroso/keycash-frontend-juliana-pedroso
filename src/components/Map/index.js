import React from 'react';
import './styles.scss';
// Libs
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ lat, lng }) => {
  const apiKey = `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <main className="Map">
      <h1>Localização</h1>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: lat,
            lng: lng,
          }}
          zoom={15}
        >
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Map;

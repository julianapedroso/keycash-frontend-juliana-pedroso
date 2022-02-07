import React from 'react';
import './styles.scss';
// Libs
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBeYVf7LF5RTEuM5XmpnaEfUFi3xlrgNcI',
  });

  return (
    <main className="Map">
      <h1>Localização</h1>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '100%'}}
          center={{
            lat: lat,
            lng: lng
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

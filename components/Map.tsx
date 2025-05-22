'use client'

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  
  const {isLoaded} = useLoadScript({
    
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  });

  function Map() {

    const center = useMemo(() => ({ lat: 33.6163903, lng: -111.9036125 }), []);

    return (
      <GoogleMap
        zoom={16}
        center={center}
        mapContainerClassName="map__container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  }
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  else {
    return <Map />;
  }

}

export default Maps
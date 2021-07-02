import React from 'react';
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
//Correr comando npm install --save @react-google-maps/api


const containerStyle = {
    width: '100%',
    height: '100%',
  };
  
  const center = {
    lat:19.4067985,
    lng: -98.9202937
  };


const MapaGoogle = (props) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAVm_x7ZFA14qNJcJn6kv-XnG4s-NIwI20"
    })
  

    const onLoad = React.useCallback(function callback(map) {console.log(map)}, [])
    const onUnmount = React.useCallback(function callback(map) {}, [])


    return isLoaded &&(
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}/>
      </GoogleMap>
  ) 
};

export default React.memo(MapaGoogle);
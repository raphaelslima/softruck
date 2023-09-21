import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import "../../styles/map.scss"

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = ()=> {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_REACT_API_KEY,
  })

  return(
    <div className='containerMap'>
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
      </GoogleMap>
  ) : <></>}
    </div>
  )
}

export default Map

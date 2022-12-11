import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import React, {useState} from 'react'

const libraries =["places"]
const mapContainerStyle = {
  width:'100%',
  height:"60vh",
}

const Map = ({coordinates})=>{
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey:"AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk",
    libraries,
  })

  // const mapRef = React.useRef()
  const onMapIdle= React.useCallback((map)=>{
    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);
  },[])


  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  return (
      <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={coordinates}
        >
        </GoogleMap>
      </div>
  )
}

export default Map
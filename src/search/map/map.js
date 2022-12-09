import {GoogleMap, useLoadScript, Marker,InfoWindow} from "@react-google-maps/api";
import React, {useState} from 'react'




const libraries =["places"]
const mapContainerStyle = {
  width:'100%',
  height:"85vh",
}

const center = {
  lat:43,
  lng:-79,
}

const options = {

}




const Map = ({setCoordinates,setBounds,coordinates})=>{
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey:"AIzaSyDSNMwPboL7wRP9BpIlqkJm3mi92aiNcGM",
    libraries,
  })

  // const mapRef = React.useRef()
  const onMapIdle= React.useCallback((map)=>{
    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);

    // console.log(map.getBounds())
    // console.log(bounds.marginBounds.ne)
    // setCoordinates({lat:coordinates.lat, lng:coordinates.lng})
    // const ne = {lat:coordinates.lat+2,lng:coordinates.lng+2}
    // const sw = {lat:coordinates.lat-2,lng:coordinates.lng-2}
    // setBounds({ne:ne,sw:sw})
  },[])






  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";



  return (
      <div>
      <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          // defaultCenter={center}
          center={coordinates}
          options={options}
          // onBoundsChanged={(e)=>{console.log(e)}}
          onClick={(e)=>{setCoordinates({lat: e.latLng.lat(),lng: e.latLng.lng()})}}
          // onIdle={onMapIdle}
      >


      </GoogleMap>
      </div>
  )


}

export default Map
import React,{useState} from "react";
import {Autocomplete} from "@react-google-maps/api";

const Header = ({setCoordinates})=>{

  const[autocomplete,setAutocomplete] = useState(null)
  const onLoad= (autoC)=> setAutocomplete(autoC)

  const onPlaceChanged =()=>{
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()

    setCoordinates({lat,lng})
  }



  return (
      <div>
        <div className="row">
          <div className="col-11">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input className="float-end w-100 mb-2"/>
            </Autocomplete>
          </div>
          <div className="col-1 mb-2">
        <button className="float-end btn btn-primary">Explore</button>
          </div>
        </div>

      </div>
  )
}
export default Header
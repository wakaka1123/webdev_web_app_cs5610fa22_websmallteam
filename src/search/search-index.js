import List from "./list/list";
import Map from "./map/map";
import Header from "./header/header";
import {getPlacesData} from "./api/search-service";
import {useEffect, useState} from "react";

const Search = () =>{

  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] =useState(null)
  const [type, setType] = useState('hotels')

  useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
              setCoordinates({lat:latitude,lng:longitude})
        })
  },[])


  useEffect(()=>{

    getPlacesData(type,coordinates).then((data)=>{
      setPlaces(data)
    })
  },[coordinates,type])


  return (

      <>

        <div>
          <Header setCoordinates={setCoordinates}/>

        </div>
        <div className="row">
          <div className="col-4">

            <List places={places} type={type} setType={setType}/>
          </div>
          <div className="col-8">
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
            />

          </div>

        </div>



      </>
  )

}

export default Search;
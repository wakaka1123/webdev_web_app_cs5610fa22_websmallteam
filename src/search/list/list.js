import Select from "react-select";
import {useState} from "react";
import {userLikesMovieThunk} from "../../likes/likes-thunks";
import PlaceDetails from "./place-details";
import list from './list.css'

const List = ({type,setType,places})=>{

  // const places = [
  //     {name:'Cool Place'},
  //      {name:'Best Beer'},
  //   {name:'Best Sight'},
  //   {name:'Cool Place'},
  // ]

  const options = [
    {value: 'restaurants', label: 'Restaurants'},
    {value: 'hotels', label: 'Hotels'},
    {value: 'attractions', label: 'Attractions'},
  ]


  return (
      <>
      <div>
        Restaurants,Hotels & Attractions in nearby
      </div>

        <Select
            className="mb-2"
            options={options}
            onChange={(e) => setType(e.value)}
        />

        <ul className="list-group wd-list" >

          {places?.map((place,i)=>
              <li key={i} className="list-group-item">

                <PlaceDetails place={place}/>
                {/*{place.name}*/}
              </li>
          )}

        </ul>

      </>

  )


}

export default List
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import ContactBar from "../home/contactBar";
import {findPlaceBySearchTermThunk} from "./googleplaces-thunks";
import {useNavigate} from "react-router";
import Select from "react-select";
import {createCitiesThunk, findAllCitiesThunk} from "../cities/cities-thunks";
import {createRestaurantsThunk, findAllRestaurantsThunk} from "../restaurants/restaurants-thunks";
import {createMuseumThunk, findAllMuseumsThunk} from "../museums/museums-thunks"


const GooglePlacesSearch = () => {
  const navigate = useNavigate();
  const {currentUser} = useSelector((state) => state.users)
  const [searchTerm, setSearchTerm] = useState('Seattle')
  const {place, loading} = useSelector((state) => state.place)
  const [searchType, setSearchType] = useState('')
  const selectOptions = [
    {value: 'City', label: 'City'},
    {value: 'Restaurant', label: 'Restaurant'},
    {value: 'Museum', label: 'Museum'}
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findPlaceBySearchTermThunk(searchTerm))
  }, [place])
  const createCityHandler = () => {
    dispatch(createCitiesThunk(
        {
          name: place.candidates?.map(item =>
          {return item.name})[0],
          address: place.candidates?.map(item =>
          {return item.formatted_address})[0]
        }))
  }
  const createRestaurantHandler = () => {
    dispatch(createRestaurantsThunk(
        {
          name: place.candidates?.map(item =>
          {return item.name})[0],
          address: place.candidates?.map(item =>
          {return item.formatted_address})[0],
          googleRating: place.candidates?.map(item =>
          {return item.rating})[0],
          priceLevel: place.candidates?.map(item =>
          {return item.price_level})[0]
        }))
  }
  const createMuseumHandler = () => {
    dispatch(createMuseumThunk(
        {
          name: place.candidates?.map(item =>
          {return item.name})[0],
          address: place.candidates?.map(item =>
          {return item.formatted_address})[0],
          googleRating: place.candidates?.map(item =>
          {return item.rating})[0],
        }))
  }
  const createDOMHandler = (searchType) => {
    if (searchType === selectOptions[0].value) {
      createCityHandler()
    } else if (searchType === selectOptions[1].value) {
      createRestaurantHandler()
    } else if (searchType === selectOptions[2].value) {
      createMuseumHandler()
    }
  }
  return (
      <>
          {/*<ContactBar/>*/}
          {/*<NavigationBar/>*/}
        <h1 className="mb-5">Place Search</h1>
        <Select
          className="w-75 mb-2"
          options={selectOptions}
          onChange={(e) => setSearchType(Object.entries(e)[0][1])}
        />
            <input
                className="form-control w-75 mb-5"
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
                value={searchTerm}/>
        {
          searchType &&
          <button
              className="btn btn-primary mt-2"
              onClick={() => {
                dispatch(findPlaceBySearchTermThunk(searchTerm));
                createDOMHandler(searchType);
                place && navigate(`/search/${searchTerm}`)
              }
              }>Search
          </button>
        }
        <br/>
        {
          currentUser && searchType === selectOptions[0].value &&
          <button
              className="btn btn-primary mt-2"
              onClick={() => {
                navigate("/cities")
              }
              }>Find All Searched Cities
          </button>
        }
        {
          currentUser && searchType === selectOptions[2].value &&
          <button
              className="btn btn-primary mt-2"
              onClick={() => {
                navigate("/museums")
              }
              }>Find All Searched Museums
          </button>
        }
        {
          currentUser && searchType === selectOptions[1].value &&
          <button
              className="btn btn-primary mt-2"
              onClick={() => {
                navigate("/restaurants")
              }
              }>Find All Searched Restaurants
          </button>
        }
      </>)
}
export default GooglePlacesSearch;
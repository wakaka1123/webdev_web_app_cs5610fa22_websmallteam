import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ContactBar from "../home/contactBar";
import NavigationBar from "../home/navigationBar";
import {findPlaceBySearchTermThunk} from "./googleplaces-thunks";

const GooglePlacesSearch = () => {
  const [searchTerm, setSearchTerm] = useState('Seattle')
  const {place, loading} = useSelector((state) => state.place)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findPlaceBySearchTermThunk(searchTerm))
  }, [])
  return (
      <>
        <ContactBar/>
        <NavigationBar/>
        <h1>Place Search</h1>
        <ul className="list-group">
          <li className="list-group-item mb-5">
            <button
                className="btn btn-primary float-end"
                onClick={() => {
                  dispatch(findPlaceBySearchTermThunk(searchTerm))
                }}>Search
            </button>
            <input
                className="form-control w-75"
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
                value={searchTerm}/>
          </li>
          {
            <div className="row">
              <div className="col">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className='float-end'>
                      <Link to={`/details/${place.candidates?.map(item => {
                        return item.place_id})}`}>
                      Details
                      </Link>
                    </div>
                    Place Name: {place.candidates?.map(item => {
                  return item.name})}
                  </li>
                  <li className="list-group-item">Address: {place.candidates?.map(item => {
                    return item.formatted_address})}</li>
                  <li className="list-group-item">Google Rating: {place.candidates?.map(item => {
                    if (item.rating) {
                      return item.rating
                    } else {
                      return 'NA'
                    }
                    })}</li>
                </ul>
              </div>
              <div className="col">
                <img src={place.candidates?.map(item => {
                  return item.photos?.map(i => {
                    return i.photo_reference})
                })} height={50}/>
              </div>
            </div>
          }
        </ul>
      </>
  )
}

export default GooglePlacesSearch;
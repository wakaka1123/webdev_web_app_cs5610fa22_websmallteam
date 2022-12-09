import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findRestaurantByIdThunk} from "./restaurants-thunks";

const CurrentRestaurant = () => {
  const {restaurantID} = useParams()
  const navigate = useNavigate();
  const {currentRestaurant} = useSelector((state) => state.restaurants)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findRestaurantByIdThunk(restaurantID))
  },[])
  return(
      <>
        <h1>{currentRestaurant && currentRestaurant.name}</h1>
        {
          currentRestaurant && currentUser &&
          <div className="row">
          <div className="col">
          <ul className="list-group">
          <li className="list-group-item">Name: {currentRestaurant.name}</li>
          <li className="list-group-item">Address: {currentRestaurant.address}</li>
            <li className="list-group-item">Google Rating: {currentRestaurant.googleRating}</li>
            <li className="list-group-item">Price Level: {currentRestaurant.priceLevel}</li>
          </ul>
          </div>
          </div>
        }
        <button
            className="btn btn-primary mt-3"
            onClick={() => {
              navigate ('/restaurants')
            }
            }>Back to Restaurants
        </button>
      </>
  )
}
export default CurrentRestaurant
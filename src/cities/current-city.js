import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findCityByIdThunk} from "./cities-thunks";

const CurrentCity = () => {
  const {cityID} = useParams()
  const navigate = useNavigate();
  const {currentCity} = useSelector((state) => state.cities)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findCityByIdThunk(cityID))
  },[])
  return(
      <>
        <h1>{currentCity && currentCity.name}</h1>
        {
          currentCity && currentUser &&
          <div className="row">
          <div className="col">
          <ul className="list-group">
          <li className="list-group-item">Name: {currentCity.name}</li>
          <li className="list-group-item">Address: {currentCity.address}</li>
          </ul>
          </div>
          </div>
        }
        <button
            className="btn btn-primary mt-3"
            onClick={() => {
              navigate ('/cities')
            }
            }>Back to Cities
        </button>
      </>
  )
}
export default CurrentCity
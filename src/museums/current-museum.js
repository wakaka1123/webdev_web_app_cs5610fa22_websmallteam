import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findMuseumByIdThunk} from "./museums-thunks";

const CurrentMuseum = () => {
  const {museumID} = useParams()
  const navigate = useNavigate();
  const {currentMuseum} = useSelector((state) => state.museums)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findMuseumByIdThunk(museumID))
  },[])
  return(
      <>
        <h1>{currentMuseum && currentMuseum.name}</h1>
        {
          currentMuseum && currentUser &&
          <div className="row">
          <div className="col">
          <ul className="list-group">
          <li className="list-group-item">Name: {currentMuseum.name}</li>
          <li className="list-group-item">Address: {currentMuseum.address}</li>
          </ul>
          </div>
          </div>
        }
        <button
            className="btn btn-primary mt-3"
            onClick={() => {
              navigate ('/museums')
            }
            }>Back to Museums
        </button>
      </>
  )
}
export default CurrentMuseum
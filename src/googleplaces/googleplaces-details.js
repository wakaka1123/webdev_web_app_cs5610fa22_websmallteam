import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findPlaceByPlaceIdThunk} from "./googleplaces-thunks";
import ContactBar from "../home/contactBar";
import NavigationBar from "../home/navigationBar";

const GooglePlacesDetails = () => {
  const {placeID} = useParams()
  const {details} = useSelector((state) => state.place)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findPlaceByPlaceIdThunk(placeID))
  },[])
  return(
      <>
        <ContactBar/>
        <NavigationBar/>
        <h1>{details.result?.name}</h1>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                Google Rating: {details.result?.rating ? details.result?.rating : 'NA'}
              </li>
              <li className="list-group-item">
                <ul className="list-group">
                Google Reviews: {details.result?.reviews ? details.result?.reviews.map(
                  review =>
                    <li key={review.author_name} className="list-group-item">
                      Author Name: {review.author_name} <br/>
                      Rating: {review.rating}<br/>
                      Content: {review.text}
                    </li>
                  )
                   : 'NA'}
                </ul>
              </li>
              <li className="list-group-item">
                Website: {details.result?.website ? details.result?.website : 'NA'}
              </li>
            </ul>
          </div>
        </div>
      </>
  )
}
export default GooglePlacesDetails
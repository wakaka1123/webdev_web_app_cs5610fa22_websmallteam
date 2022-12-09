import {useSelector} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";
import ContactBar from "../home/contactBar";
import NavigationBar from "../home/navigationBar";
import {useNavigate} from "react-router";

const GooglePlacesSearchResult = () => {
  const navigate = useNavigate();
  const {place, loading} = useSelector((state) => state.place)
  return (
      <>
        <ContactBar/>
        <h1>Search Result</h1>
        {
          <div className="row">
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className='float-end'>
                    <Link to={`/details/${place.candidates?.map(item => {
                      return item.place_id
                    })}`}>
                      Details
                    </Link>
                  </div>
                  Place Name: {place.candidates?.map(item => {
                  return item.name
                })}
                </li>
                <li className="list-group-item">Address: {place.candidates?.map(
                    item => {
                      return item.formatted_address
                    })}</li>
                <li className="list-group-item">
                  Google Rating: {place.candidates?.map(item =>
                    item.rating ? item.rating : 'NA'
                  )}</li>
              </ul>
            </div>
            <div className="col">
              <img src={place.candidates?.map(item => {
                return item.photos?.map(i => {
                  return i.photo_reference
                })
              })} height={50}/>
            </div>
          </div>
        }
        <button
            className="btn btn-primary mt-3"
            onClick={() => {
              navigate ('/search')
            }
            }>Back to Search
        </button>
      </>
  )
}
export default GooglePlacesSearchResult;
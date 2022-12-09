import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllCitiesThunk, findCityByIdThunk} from "./cities-thunks";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const CityList = () => {
  const {cities} = useSelector((state) => state.cities)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllCitiesThunk())
  }, [])
  return (
      <>
        {/*<ContactBar/>*/}
        {/*<NavigationBar/>*/}
        <h1>Cities {cities.cities}</h1>
        <ul className="list-group">
          {
            cities.map((city) =>
                <li className="list-group-item"
                    key={city._id}>
                  <Link to={`/cities/${city._id}`}>
                    {city.name}
                  </Link>
                </li>
            )
          }
        </ul>
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
export default CityList
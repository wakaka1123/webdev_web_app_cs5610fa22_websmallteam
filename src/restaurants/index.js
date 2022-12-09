import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllRestaurantsThunk} from "./restaurants-thunks";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const RestaurantList = () => {
  const {restaurants} = useSelector((state) => state.restaurants)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllRestaurantsThunk())
  }, [])
  return (
      <>
        {/*<ContactBar/>*/}
        {/*<NavigationBar/>*/}
        <h1>Restaurants {restaurants.restaurants}</h1>
        <ul className="list-group">
          {
            restaurants.map((restaurant) =>
                <li className="list-group-item"
                    key={restaurant._id}>
                  <Link to={`/restaurants/${restaurant._id}`}>
                  {restaurant.name}
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
export default RestaurantList
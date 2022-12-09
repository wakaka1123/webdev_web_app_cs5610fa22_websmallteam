import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllMuseumsThunk} from "./museums-thunks";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const MuseumList = () => {
  const {museums} = useSelector((state) => state.museums)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllMuseumsThunk())
  }, [])
  return (
      <>
        {/*<ContactBar/>*/}
        {/*<NavigationBar/>*/}
        <h1>Museums {museums.museums}</h1>
        <ul className="list-group">
          {
            museums.map((museum) =>
                <li className="list-group-item"
                    key={museum._id}>
                  <Link to={`/museums/${museum._id}`}>
                  {museum.name}
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
export default MuseumList
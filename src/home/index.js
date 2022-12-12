import MidContent from "./midContent";
import Carousel from "./carousel";
import NavigationSidebar from "./sideBar";
import {useDispatch, useSelector} from "react-redux";
import WelcomeIndividual from "./welcome/welcome-individual";
import {useEffect} from "react";
import {findAllCitiesThunk} from "../cities/cities-thunks";
import {
  findPlaceByPlaceIdThunk,
  findPlaceBySearchTermThunk
} from "../googleplaces/googleplaces-thunks";
import {findPlaceBySearchTerm} from "../googleplaces/googleplaces-service";
import {Link} from "react-router-dom";

const HomePage = () =>{
  const {currentUser} = useSelector((state) => state.users)
  const {place} = useSelector((state)=>state.place)
  const {cities} = useSelector((state)=>state.cities)


  return (
      <>
        {
          currentUser &&
        <div className="row">
          <div className="col-2 d-none d-xl-block">
            <NavigationSidebar/>
            <br/>
            <ul className="list-group">
              <li className="list-group-item active">hot destinations</li>
              {cities?.slice(-3).reverse().map(item=><li className="list-group-item">{item.name}</li>)}
            </ul>
            <br/>
            <WelcomeIndividual/>

          </div>
          <div className="col-10">
            <Carousel/>
            <br/>
            <MidContent/>
          </div>
        </div>
        }

        {
          !currentUser &&
            <div className="row">
              <div className="col-2 d-none d-xl-block">
                <ul className="list-group">
                  <li className="list-group-item active">hot destinations</li>
                  {cities?.slice(-3).reverse().map(item=><li className="list-group-item">{item.name}</li>)}
                </ul>

              </div>


              <div className="col-10">
              <Carousel/>
              <br/>
              <MidContent/>
              </div>
            </div>
        }

      </>


  )


}

export default HomePage;
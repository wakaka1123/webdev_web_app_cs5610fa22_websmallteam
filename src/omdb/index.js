import Movies from "../movies";
import moviesReducer from "../movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";
import omdbReducer from "./omdb-reducer";
import OmdbSearch from "./omdb-search";
import likesReducer from "../likes/likes-reducer";
import {Link} from "react-router-dom";
import OmUserList from "./om-users";
import OmUsersReducer from "./om-users/om-users-reducer";
import OmNav from "./omNav";
import {useEffect} from "react";
import {findAllOmUsersThunk, omProfileThunk} from "./om-users/om-users-thunk";
import CurrentOmUser from "./om-users/current-om-user";
import {Routes, Route} from "react-router";
import OmRegister from "./om-users/om-register";
import OmLogin from "./om-users/om-login";
import OmProfile from "./om-users/omProfile";



const store = configureStore({
  reducer:{
    movies:moviesReducer,
    omdb:omdbReducer,
    likes: likesReducer,
    users: OmUsersReducer,
  }
})


const Omdb =()=> {

  const curOmUser = useSelector((state)=>state.omusers.currentOmUser)
  const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(omProfileThunk())
  },[])


  return (

      // <CurrentOmUser>

    <div >
      <Link to="/">Back</Link>
      {/*<Provider store={store}>*/}

        {/*<Link to="/om-register">Register</Link>*/}
      <OmNav/>

        <h1>Omdb Home</h1>
      {curOmUser&&<h2>Welcome {curOmUser.username}</h2>}

          {/*<OmdbSearch/>*/}
          {/*<Movies/>*/}
          {/*<OmUserList/>*/}
      {/*</Provider>*/}
    </div>
      // {/*</CurrentOmUser>*/}

  );
}

export default Omdb;

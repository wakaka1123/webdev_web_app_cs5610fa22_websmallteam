import Movies from "../movies";
import moviesReducer from "../movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import omdbReducer from "./omdb-reducer";
import OmdbSearch from "./omdb-search";
import likesReducer from "../likes/likes-reducer";
import {Link} from "react-router-dom";



const store = configureStore({
  reducer:{
    movies:moviesReducer,
    omdb:omdbReducer,
    likes: likesReducer
  }
})


const Omdb =()=> {
  return (

    <div >
      <Provider store={store}>
        <Link to="/">Back</Link>
          <OmdbSearch/>
          <Movies/>
      </Provider>
    </div>

  );
}

export default Omdb;

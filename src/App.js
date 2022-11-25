import './App.css';
import Movies from "./movies";
import moviesReducer from "./movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import omdbReducer from "./omdb/omdb-reducer";
import OmdbSearch from "./omdb/omdb-search";
import {likesReducer} from "./likes/likes-reducer";

const store = configureStore({
  reducer:{
    movies:moviesReducer,
    omdb:omdbReducer,
    likes: likesReducer
  }
})


function App() {
  return (
    <div >
      <Provider store={store}>
            <OmdbSearch/>
          <Movies/>
      </Provider>
    </div>
  );
}

export default App;

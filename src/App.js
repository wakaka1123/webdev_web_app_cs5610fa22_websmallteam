import './App.css';
import Movies from "./movies";
import moviesReducer from "./movies/movies-reducer";
import profilesReducer from "./profile/profile-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Profile from "./profile";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import EditProfileComponent from "./edit-profile";
import omdbReducer from "./omdb/omdb-reducer";
import OmdbSearch from "./omdb/omdb-search";
import {likesReducer} from "./likes/likes-reducer";

const store = configureStore({
  reducer:{
    movies:moviesReducer,
      profiles: profilesReducer,
    omdb:omdbReducer,
    likes: likesReducer
  }
})


function App() {
    return (
        <Provider store={store}>
            <nav>
                <Link to="/profile">Profile</Link>
            </nav>
            <div>
                <Routes>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/" element={<Movies/>}></Route>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    <Route path="/search" element={<OmdbSearch/>}></Route>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;

import './App.css';
import moviesReducer from "./movies/movies-reducer";
import profilesReducer from "./profile/profile-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Profile from "./profile";
import {Routes, Route} from "react-router";
import EditProfileComponent from "./edit-profile";
import omdbReducer from "./omdb/omdb-reducer";
import likesReducer from "./likes/likes-reducer";
import HomePage from "./home";
import Omdb from "./omdb";
import {Link} from "react-router-dom";


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
          <div className="container">
            <nav>
              <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path ="/" element={<HomePage/>}/>
              <Route path ="/movies/*" element={<Omdb/>}/>
              <Route path="edit-profile" element={<EditProfileComponent/>}/>
            </Routes>
          </div>
  </Provider>


    );

}
export default App;

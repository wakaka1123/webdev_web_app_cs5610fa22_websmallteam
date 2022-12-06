import './App.css';
import moviesReducer from "./movies/movies-reducer";
import usersReducer from "./users/users-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";
import Profile from "./users/profile.js";
import OthersProfiles from "./users/profile-other";
import UserList from "./users";
import Register from "./users/register";
import Login from "./users/login";
import {Routes, Route} from "react-router";
import EditProfileComponent from "./edit-profile";
import omdbReducer from "./omdb/omdb-reducer";
import likesReducer from "./likes/likes-reducer";
import HomePage from "./home";
import Omdb from "./omdb";
import CurrentUser from "./users/current-user";
import NavigationBar from "./home/navigationBar";
import TopNav from "./topnav";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        omdb: omdbReducer,
        likes: likesReducer,
        users: usersReducer
    }
})




function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <CurrentUser>
                    <TopNav/>
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/other" element={<OthersProfiles/>}/>
                        <Route path="/users" element={<UserList/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/movies/*" element={<Omdb/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </CurrentUser>
            </div>
        </Provider>
    );
}

export default App;

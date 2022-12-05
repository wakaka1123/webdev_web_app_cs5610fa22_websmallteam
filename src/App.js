import './App.css';
import moviesReducer from "./movies/movies-reducer";
import profilesReducer from "./profile/profile-reducer"
import usersReducer from "./users/users-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Profile from "./users/profile";
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
import OmRegister from "./omdb/om-users/om-register";
import OmdbSearch from "./omdb/omdb-search";
import Movies from "./movies";
import OmUserList from "./omdb/om-users";
import OmUsersReducer from "./omdb/om-users/om-users-reducer";
import OmLogin from "./omdb/om-users/om-login";
import OmProfile from "./omdb/om-users/omProfile";
import OmNav from "./omdb/omNav";
import CurrentOmUser from "./omdb/om-users/current-om-user";
import OmdbDetail from "./omdb/omdb-details";
import reviewsReducer from "./omdb/review/reviews-reducer";
import OmPublicProfile from "./omdb/om-users/om-public-profile";
import followsReducer from "./follows/follows-reducer";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        profiles: profilesReducer,
        omdb: omdbReducer,
        likes: likesReducer,
        users: usersReducer,
        omusers: OmUsersReducer,
        reviews: reviewsReducer,
        follows: followsReducer,
    }
})


function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <CurrentUser>
                    <CurrentOmUser>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/users" element={<UserList/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>

                        <Route path="/movies/" element={<Omdb/>}/>
                        <Route path="/movies/search" element={<OmdbSearch/>}/>
                        <Route path="/movies/allmovies" element={<Movies/>}/>
                        <Route path="/movies/om-users" element={<OmUserList/>}/>
                        <Route path="/movies/register" element={<OmRegister/>}/>
                        <Route path="/movies/login" element={<OmLogin/>}/>
                        <Route path="/movies/profile" element={<OmProfile/>}/>
                        <Route path="/movies/details/:imdbID" element={<OmdbDetail/>}/>
                        <Route path="/movies/profile/:uid" element={<OmPublicProfile/>}/>

                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        <Route path="/om-register" element={<OmRegister/>}/>

                    </Routes>
                    </CurrentOmUser>
                </CurrentUser>
            </div>
        </Provider>
    );
}

export default App;

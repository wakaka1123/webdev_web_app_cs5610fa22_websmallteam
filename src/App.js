import './App.css';
import moviesReducer from "./movies/movies-reducer";
import usersReducer from "./users/users-reducer"
import googlePlacesReducer from "./googleplaces/googleplaces-reducer"
import {configureStore} from "@reduxjs/toolkit";
import {Provider, useSelector} from "react-redux";
import Profile from "./users/profile.js";
import OthersProfiles from "./users/profile-other";
import UserList from "./users";
import Register from "./users/register";
import IndividualRegister from "./users/register-individual"
import CorporateRegister from "./users/register-corporate"
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
import GooglePlacesSearch from "./googleplaces/googleplaces-search";
import GoogleplacesDetails from "./googleplaces/googleplaces-details";
import GooglePlacesSearchResult from "./googleplaces/googleplace-result";
import citiesReducer from "./cities/cities-reducer"
import reviewsReducer from "./reviews/reviews-reducer"
import museumsReducer from "./museums/museums-reducer"
import restaurantsReducer from "./restaurants/restaurants-reducer"
import CityList from "./cities"
import MuseumList from "./museums"
import RestaurantList from "./restaurants"
import CurrentCity from "./cities/current-city";
import CurrentMuseum from "./museums/current-museum"
import CurrentRestaurant from "./restaurants/current-restaurant"



const store = configureStore({
    reducer: {
        movies: moviesReducer,
        omdb: omdbReducer,
        likes: likesReducer,
        users: usersReducer,
        place: googlePlacesReducer,
        cities: citiesReducer,
        reviews: reviewsReducer,
        museums: museumsReducer,
        restaurants: restaurantsReducer
    }
})




function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <CurrentUser>
                    <NavigationBar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/profile/*" element={<OthersProfiles/>}/>
                        <Route path="/other" element={<OthersProfiles/>}/>
                        <Route path="/users" element={<UserList/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/register/individual" element={<IndividualRegister/>}/>
                        <Route path="/register/corporate" element={<CorporateRegister/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/movies/*" element={<Omdb/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        <Route path="/search" element={<GooglePlacesSearch/>}/>
                        <Route path="/search/:term" element={<GooglePlacesSearchResult/>}/>
                        <Route path="/details/:placeID" element={<GoogleplacesDetails/>}/>
                        <Route path="/cities" element={<CityList/>}/>
                        <Route path="/museums" element={<MuseumList/>}/>
                        <Route path="/restaurants" element={<RestaurantList/>}/>
                        <Route path="/cities/:cityID" element={<CurrentCity/>}/>
                        <Route path="/museums/:museumID" element={<CurrentMuseum/>}/>
                        <Route path="/restaurants/:restaurantID" element={<CurrentRestaurant/>}/>
                    </Routes>
                </CurrentUser>
            </div>
        </Provider>
    );
}

export default App;

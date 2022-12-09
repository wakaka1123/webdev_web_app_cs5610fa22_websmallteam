import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllRestaurants, createRestaurant, findRestaurantById} from "./restaurants-service";

export const createRestaurantsThunk = createAsyncThunk(
    'createRestaurant',
    (newCity) => createRestaurant(newCity)
)

export const findAllRestaurantsThunk = createAsyncThunk(
    'findAllRestaurants',
    () => findAllRestaurants()
)
export const findRestaurantByIdThunk = createAsyncThunk(
    'findRestaurantById',
    async (restaurantID) => await findRestaurantById(restaurantID)
)
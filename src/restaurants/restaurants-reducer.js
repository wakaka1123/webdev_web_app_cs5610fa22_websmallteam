import {createSlice} from "@reduxjs/toolkit";
import {createRestaurantsThunk, findAllRestaurantsThunk, findRestaurantByIdThunk} from "./restaurants-thunks";

const initialState = {
  restaurants: [],
  loading: true,
  currentRestaurant: null
}

const restaurantsReducer = createSlice({
  name: 'restaurants',
  initialState: initialState,
  extraReducers: {
    [findAllRestaurantsThunk.fulfilled]: (state, action) => {
      state.restaurants = action.payload
    },
    [createRestaurantsThunk.fulfilled]: (state, action) => {
      state.restaurants.push(action.payload)
    },
    [findRestaurantByIdThunk.fulfilled]: (state, action) => {
      state.currentRestaurant = action.payload
    }
  }
})

export default restaurantsReducer.reducer;
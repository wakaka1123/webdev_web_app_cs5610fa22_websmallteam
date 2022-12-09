import {createSlice} from "@reduxjs/toolkit";
import {createCitiesThunk, findAllCitiesThunk, findCityByIdThunk} from "./cities-thunks";

const initialState = {
  cities: [],
  loading: true,
  currentCity:null
}

const citiesReducer = createSlice({
  name: 'cities',
  initialState: initialState,
  extraReducers: {
    [findAllCitiesThunk.fulfilled]: (state, action) => {
      state.cities = action.payload
    },
    [createCitiesThunk.fulfilled]: (state, action) => {
      state.cities.push(action.payload)
    },
    [findCityByIdThunk.fulfilled]: (state, action) => {
      state.currentCity = action.payload
    }
  }
})

export default citiesReducer.reducer;
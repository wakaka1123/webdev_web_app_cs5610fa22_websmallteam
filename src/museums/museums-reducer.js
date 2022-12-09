import {createSlice} from "@reduxjs/toolkit";
import {createMuseumThunk, findAllMuseumsThunk, findMuseumByIdThunk} from "./museums-thunks";
import {findCityByIdThunk} from "../cities/cities-thunks";

const initialState = {
  museums: [],
  loading: true,
  currentMuseum: null
}

const museumsReducer = createSlice({
  name: 'museums',
  initialState: initialState,
  extraReducers: {
    [findAllMuseumsThunk.fulfilled]: (state, action) => {
      state.museums = action.payload
    },
    [createMuseumThunk.fulfilled]: (state, action) => {
      state.cities.push(action.payload)
    },
    [findMuseumByIdThunk.fulfilled]: (state, action) => {
      state.currentMuseum = action.payload
    }
  }
})

export default museumsReducer.reducer;
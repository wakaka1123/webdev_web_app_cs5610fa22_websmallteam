import {createSlice} from "@reduxjs/toolkit";
import {findPlaceBySearchTerm, findPlaceByPlaceId} from "./googleplaces-service";
import {findPlaceBySearchTermThunk, findPlaceByPlaceIdThunk} from "./googleplaces-thunks";

const initialState = {
  place: [],
  loading: false,
  details: {}
}

const googlePlacesReducer = createSlice({
  name: 'place',
  initialState,
  extraReducers: {
    [findPlaceBySearchTermThunk.fulfilled]: (state, action) => {
      state.place = action.payload
    },
    [findPlaceByPlaceIdThunk.fulfilled]: (state, action) => {
      state.details = action.payload
    }
  }
})

export default googlePlacesReducer.reducer
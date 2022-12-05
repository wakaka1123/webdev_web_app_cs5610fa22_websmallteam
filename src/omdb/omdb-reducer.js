import {
  findMovieByImdbIdThunk,
  findMovieBySearchTermThunk
} from "./omdb-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  movies:[],
  loading:false,
  details:{}
}

const omdbReducer = createSlice({
  name:'omdb',
  initialState,
  extraReducers:{
    [findMovieBySearchTermThunk.fulfilled]:(state, action)=>{
      state.movies = action.payload
    },
    [findMovieByImdbIdThunk.fulfilled]:(state, action)=>{
      state.details = action.payload
    },
  }
})

export default omdbReducer.reducer
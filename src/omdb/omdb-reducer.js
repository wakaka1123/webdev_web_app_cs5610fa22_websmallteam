import {findMovieBySearchTermThunk} from "./omdb-thunks";
import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  movies:[],
  loading:false
}

const omdbReducer = createSlice({
  name:'omdb',
  initialState,
  extraReducers:{
    [findMovieBySearchTermThunk.fulfilled]:(state, action)=>{
      state.movies = action.payload
    }
  }
})

export default omdbReducer.reducer
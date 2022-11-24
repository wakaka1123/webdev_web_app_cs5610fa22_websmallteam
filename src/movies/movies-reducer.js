import {createSlice} from "@reduxjs/toolkit";
import {
  createMoviesThunk,
  deleteMovieThunk,
  findAllMoviesThunk
} from "./movies-thunks";

const moviesReducer = createSlice({
  name:'movies',
  initialState:[],
  extraReducers:{
    [findAllMoviesThunk.fulfilled]:(state,action)=>{
      return state = action.payload
    },
    [createMoviesThunk.fulfilled]: (state,action)=>{
      state.push(action.payload)
    },
    [deleteMovieThunk.fulfilled]: (state,action)=>{
      return state = state.filter(m=>m._id !== action.payload)
    }
  }
})

export default moviesReducer.reducer;
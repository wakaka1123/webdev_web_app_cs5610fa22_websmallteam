import {createSlice} from "@reduxjs/toolkit";
import {findAllMoviesThunk} from "./movies-thunks";

const moviesReducer = createSlice({
  name:'movies',
  initialState:[],
  extraReducers:{
    [findAllMoviesThunk.fulfilled]:(state,action)=>{
        return state = action.payload
    }
  }
})

export default moviesReducer.reducer;
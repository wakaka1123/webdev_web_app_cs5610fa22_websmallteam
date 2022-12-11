import {createSlice} from "@reduxjs/toolkit";
import {welcomeIndividualThunk} from "./welcome-thunk";

const welcomeIndividualReducer = createSlice({
  name:'welcomeIndividualUser',
  initialState:[],
  extraReducers:{
    [welcomeIndividualThunk.fulfilled]:(state,action)=>{
      return state= action.payload
    },
  }
})

export default welcomeIndividualReducer.reducer
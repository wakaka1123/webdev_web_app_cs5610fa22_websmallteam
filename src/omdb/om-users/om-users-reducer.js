import {
  findAllOmUsersThunk, findUserByIdThunk,
  omLoginThunk, omLogoutThunk, omProfileThunk,
  omRegisterThunk
} from "./om-users-thunk";
import {createSlice} from "@reduxjs/toolkit";

const OmUsersReducer = createSlice({
  name:'om-users',
  initialState:{
    loading:false,
    omusers:[],
    currentOmUser:null,
    error:null,
    publicProfile:null,
  },
  reducers:{

  },
  extraReducers:{
    [findAllOmUsersThunk.fulfilled]:(state,action) =>{
      state.omusers= action.payload
    },
    [findUserByIdThunk.fulfilled]:(state,action) =>{
      state.publicProfile = action.payload
    },

    [omRegisterThunk.fulfilled]: (state,action) =>{
      state.currentOmUser= action.payload
    },
    [omRegisterThunk.rejected]:(state,action) =>{
      state.error= action.payload
      state.currentOmUser = null
    },
    [omLoginThunk.fulfilled]: (state,action) =>{
      state.currentOmUser= action.payload

    },
    [omLoginThunk.rejected]:(state,action) =>{
      state.error= action.payload
      state.currentOmUser = null
    },
    [omProfileThunk.fulfilled]: (state,action) =>{
      state.currentOmUser= action.payload

    },
    [omProfileThunk.rejected]:(state,action) =>{
      state.error= action.payload
      state.currentOmUser = null
    },
    [omLogoutThunk.fulfilled]:(state,action) =>{
      state.currentOmUser = null
    },
  }
})

export default OmUsersReducer.reducer
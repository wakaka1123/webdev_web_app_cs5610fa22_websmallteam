import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  findAllOmUsers,
  omRegister,
  omLogin,
  omProfile, omLogout, findUserById
} from "./om-users-service";


export const findAllOmUsersThunk = createAsyncThunk(
    'findAllOmUsers',
    async ()=> await findAllOmUsers()
)

export const omRegisterThunk = createAsyncThunk(
    'omRegister',
    async (user)=> await omRegister(user)
)

export const omLoginThunk = createAsyncThunk(
    'omLogin',
    async (user)=> await omLogin(user)
)

export const omProfileThunk = createAsyncThunk(
    'omProfile',
    async ()=> await omProfile()
)

export const omLogoutThunk = createAsyncThunk(
    'omLogout',
    async ()=> await omLogout()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid)=> await findUserById(uid)
)

import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register} from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async(user) => await register(user)
)
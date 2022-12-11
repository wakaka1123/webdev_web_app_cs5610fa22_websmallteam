import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, registerThunk, loginThunk, logoutThunk, profileThunk} from "./users-thunk";
import {updateUser} from "./users-service";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users:[],
        currentUser: null,
        error: null
    },
    reducers: {
        editProfile(state, action) {
            updateUser(action.payload)
                .then(res => console.log(res));
            state = {
                ...state,
                currentUser: action.payload
            }
            return state;
        }
    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            return action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        }
    }
})

export const {editProfile} = usersReducer.actions;
export default usersReducer.reducer
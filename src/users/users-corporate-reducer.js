import {createSlice} from "@reduxjs/toolkit";
import {findAllCorpUsersThunk, registerThunk, loginThunk, logoutThunk, profileThunk} from "./users-corporate-thunk";
import {updateCorporateUser} from "./users-corporate-service";

const usersCorporateReducer = createSlice({
    name: 'users-corporate',
    initialState: {
        loading: false,
        users:[],
        currentUser: null,
        error: null
    },
    reducers: {
        editCorporateProfile(state, action) {
            updateCorporateUser(action.payload)
                .then(res => console.log(res));
            state = {
                ...state,
                currentUser: action.payload
            }
            return state;
        }
    },
    extraReducers: {
        [findAllCorpUsersThunk.fulfilled]: (state, action) => {
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

export const {editCorporateProfile} = usersCorporateReducer.actions;
export default usersCorporateReducer.reducer
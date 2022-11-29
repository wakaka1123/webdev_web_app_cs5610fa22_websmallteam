import { createSlice } from "@reduxjs/toolkit";
import profiles from './profiles.json';


const profilesSlice = createSlice({
    name: 'profile',
    initialState: profiles,
    reducers: {
        editProfile(state, action) {
            state = {
                ...action.payload
            }
            return state;
        }
    }
});

export const {editProfile} = profilesSlice.actions;
export default profilesSlice.reducer;
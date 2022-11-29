import axios from "axios";

const PROFILE_API_ULR = "http://localhost:4000/profile"

export const createProfile = async(newProfile) => {
    const response = await axios.post(PROFILE_API_ULR, newProfile)
    const actualProfile = response.data
    return actualProfile
}

export const updateProfile = async () => {

}
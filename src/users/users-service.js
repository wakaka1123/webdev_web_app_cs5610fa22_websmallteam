import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const createUser = async() => {

}

export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/profile`)
    return response.data
}

export const register = async(user) => {
    const response = await axios.post(`${BASE_URL}/register`, user)
    return response.data
}

export const deleteUser = async (uid) => {
}

export const updateUser = async (uid, userUpdates) => {
}
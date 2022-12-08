import axios from "axios";
const BASE_URL = 'http://localhost:4000'
const api = axios.create({withCredentials:true})

export const createUser = async() => {

}

export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/profile`)
    let allUsers = {}
    response.data.forEach((user,i) => allUsers[user._id] = user);
    return allUsers
}

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/admin-register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/logout`)
    return response.data
}

export const deleteUser = async (uid) => {
    const response = await api.delete(`${BASE_URL}/admin-users/:uid`)
    return response.data
}

export const updateUser = async (profile) => {
    const response = await axios.put(`${BASE_URL}/profile`, profile)
    return response.data
}
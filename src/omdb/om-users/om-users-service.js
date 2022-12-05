import axios from "axios";
const BASE_URL = 'http://localhost:4000/movies'


const api = axios.create({withCredentials: true});


export const createOmUser = async ()=>{

}

export const findUserById = async (uid)=>{
  const response = await api.get(`${BASE_URL}/om-users/${uid}`)
  const user = response.data
  return user
}


export const findAllOmUsers = async ()=>{
  const response = await axios.get('http://localhost:4000/movies/om-users')
  const users= response.data
  return users
}

export const deleteOmUser = async (uid)=>{

}

export const updateOmUser = async (uid, updates)=>{

}

export const omRegister = async (user) => {
  const response = await api.post(`${BASE_URL}/register`,user)
  return response.data
}

export const omLogin = async (user) => {
  const response = await api.post(`${BASE_URL}/login`,user)
  return response.data
}

export const omProfile = async () =>{
  const response = await api.post(`${BASE_URL}/profile`)
  return response.data
}

export const omLogout = async () =>{
  const response = await api.post(`${BASE_URL}/logout`)
  return response.data
}
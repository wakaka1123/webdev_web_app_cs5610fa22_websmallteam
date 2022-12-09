import axios from "axios";
const MUSEUM_API_URL = 'http://localhost:4000/museums'

export const createMuseum = async (newMuseum) => {
  const response = await axios.post(MUSEUM_API_URL, newMuseum)
  const actualMuseum = response.data
  return actualMuseum
}
export const findAllMuseums = async () => {
  const response = await axios.get(MUSEUM_API_URL)
  const museums = response.data
  return museums
}
export const findMuseumById = async (museumID) => {
  const response = await axios.get(`${MUSEUM_API_URL}/${museumID}`)
  const museum = response.data
  return museum
}
import axios from "axios";

const PLACE_API_URL = 'http://localhost:4000/place'

export const findPlaceBySearchTerm = async (name) => {
  const response = await axios.get(`${PLACE_API_URL}/${name}`)
  return response.data
}

export const findPlacePhotoByReference = async (reference) => {
  const response = await axios.get(`${PLACE_API_URL}/photo/${reference}`)
  return response.data
}

export const findPlaceByPlaceId = async (placeID) => {
  const response = await axios.get(`${PLACE_API_URL}/details/${placeID}`)
  return response.data
}
import axios from "axios";

const SEARCH_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json\n'
    + '  ?fields=all\n'
    + '  &inputtype=textquery\n'
    + '  &key=AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk\n'
    + '  &input='
const DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json\n'
    + '  ?fields=all\n'
    + '  &key=AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk\n'
    + '  &place_id='
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
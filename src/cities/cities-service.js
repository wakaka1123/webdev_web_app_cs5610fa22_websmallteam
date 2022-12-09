import axios from "axios";
const CITY_API_URL = 'http://localhost:4000/cities'


export const createCity = async (newCity) => {
  const response = await axios.post(CITY_API_URL, newCity)
  const actualCity = response.data
  return actualCity
}
export const findAllCities = async () => {
  const response = await axios.get(CITY_API_URL)
  const cities = response.data
  return cities
}
export const findCityById = async (cityID) => {
  const response = await axios.get(`${CITY_API_URL}/${cityID}`)
  const city = response.data
  return city
}
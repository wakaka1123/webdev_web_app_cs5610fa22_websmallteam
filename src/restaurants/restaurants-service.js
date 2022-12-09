import axios from "axios";
const RESTAURANT_API_URL = 'http://localhost:4000/restaurants'

export const createRestaurant = async (newRestaurant) => {
  const response = await axios.post(RESTAURANT_API_URL, newRestaurant)
  const actualRestaurants = response.data
  return actualRestaurants
}
export const findAllRestaurants = async () => {
  const response = await axios.get(RESTAURANT_API_URL)
  const restaurants = response.data
  return restaurants
}
export const findRestaurantById = async (restaurantID) => {
  const response = await axios.get(`${RESTAURANT_API_URL}/${restaurantID}`)
  const restaurant = response.data
  return restaurant
}
import axios from "axios";

const SEARCH_URL = 'http://www.omdbapi.com/?apikey=a710cb0b&s='

export const findMovieBySearchTerm = async (term) =>{
  const response = await axios.get(`${SEARCH_URL}${term}`)
  return response.data.Search
}
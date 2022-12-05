import axios from "axios";

const SEARCH_URL = 'https://www.omdbapi.com/?apikey=a710cb0b&s='
const DETAILS_URL = 'https://www.omdbapi.com/?apikey=a710cb0b&i='

export const findMovieBySearchTerm = async (term) =>{
  const response = await axios.get(`${SEARCH_URL}${term}`)
  return response.data.Search
}

export const findMovieByImdbId = async (imdbID)=>{
  const response = await axios.get(`${DETAILS_URL}${imdbID}`)
  return response.data
}
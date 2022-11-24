import axios from "axios";

const MOVIE_API_URL = "https://webdev-server-web-small-team.herokuapp.com/movies"

export const createMovie= async()=>{}

export const findAllMovies= async ()=>{
  const response = await axios.get(MOVIE_API_URL)
  const movies = response.data
  return movies
}

export const updateMovie=async ()=>{}
export const deleteMovie= async()=>{}
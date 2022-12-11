import axios from "axios";

const BASE_URL = 'http://localhost:4000'


export const welcomeIndividual= async ()=>{
  const response = await axios.get(`${BASE_URL}/welcome-individual`)
  const welcomeIndividual = response.data
  return welcomeIndividual
}


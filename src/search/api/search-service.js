import axios from "axios";

const GET_RESTAURANTS_API = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    limit: '20',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '3e165827c7msh3dddaaf5207800bp1b2247jsn23c85337080e',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async (type,coordinates) =>{

  try{
    const offset= type ==='restaurants'? 0.01 : (type==='hotels'? 1:0.5)
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
      params: {
        bl_latitude: coordinates.lat-offset,
        tr_latitude: coordinates.lat+offset,
        bl_longitude: coordinates.lng-offset,
        tr_longitude: coordinates.lng+offset,
        limit: '10',
        lang: 'en_US'
      },
      headers: {
        'X-RapidAPI-Key': '3e165827c7msh3dddaaf5207800bp1b2247jsn23c85337080e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    console.log(response.data.data)
    return response.data.data

  } catch(err){
    console.log(err)
  }
}
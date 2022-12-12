import './carousel.css'
import {images} from './carouselData'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  findPlaceByPlaceIdThunk,
  findPlaceBySearchTermThunk
} from "../googleplaces/googleplaces-thunks";
import {findAllCitiesThunk} from "../cities/cities-thunks";



const PLACE_PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo'
    + '?maxwidth=400'
    + '&key=AIzaSyC_VM4TqUh9-YOh9Off2mIf2i38Ui5PJYk'
    + '&photo_reference='



const Carousel = () => {
  const [curImg, setCurImg] = useState(0)
  const {place} = useSelector((state)=>state.place)
  const dispatch = useDispatch()
  const {cities} = useSelector((state)=>state.cities)

  useEffect(() => {
    dispatch(findAllCitiesThunk())
  }, [])

  const lastThree = `${cities?.slice(-3).reverse().map(item=>{return item.name})}`


  let lastCity = lastThree.split(',')[0]
  useEffect(() => {
    dispatch(findPlaceBySearchTermThunk(lastCity))
  }, [])

  if(place.length != 0){
    const placePhotoUrl = `${place.candidates?.map(item=>{return item.photos?.map(i=>{return i.photo_reference})})}`
    images[0].img = PLACE_PHOTO_URL+ placePhotoUrl
    const placeName =`${place.candidates?.map(item=>{return item.name})}`
    const placeAddress =`${place.candidates?.map(item=>{return item.formatted_address})}`
    images[0].title = placeName
    images[0].subtitle = placeAddress
  }






  return (
      <div className="carousel">

        <div className="carouselInner " style={{backgroundImage: `url(${images[curImg].img})`}}>


          <div className="left" onClick={()=>{curImg === 0 ? setCurImg(2)  : setCurImg(curImg-1)}}><i className="bi bi-caret-left"/></div>


          <div className="center">
            <h1>{images[curImg].title}</h1>
            <p>
              {images[curImg].subtitle}
            </p>

          </div>


          <div className="right" onClick={()=>{setCurImg((curImg+1)%3)}}><i className="bi bi-caret-right"/></div>

        </div>







      </div>


  )


}

export default Carousel;
import './carousel.css'
import {images} from './carouselData'
import {useState} from "react";

const Carousel = () => {
  const [curImg, setCurImg] = useState(0)

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
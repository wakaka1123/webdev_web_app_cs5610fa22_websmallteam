import {useParams} from "react-router";
import OmNav from "./omNav";
import {useDispatch, useSelector} from "react-redux";
import {findMovieByImdbIdThunk} from "./omdb-thunks";
import {useEffect, useState} from "react";
import {
  createReviewThunk,
  findReviewsByMovieThunk
} from "./review/reviews-thunks";
import {Link} from "react-router-dom";

const OmdbDetail = () => {
  const {imdbID} = useParams()
  // console.log(useParams())
  const [review,setReview] = useState('')
  //const [reviews,setReviews] = useState([])
  const {reviews} = useSelector((state)=>state.reviews)
  const {details} = useSelector((state)=>state.omdb)
  const curOmUser = useSelector((state)=>state.omusers.currentOmUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(findMovieByImdbIdThunk(imdbID))
    dispatch(findReviewsByMovieThunk(imdbID))
  },[])
  const handlePostReviewBtn =()=>{
    dispatch(createReviewThunk({
      review,
      imdbID
      // author: curOmUser._id
    }))

  }

    return(
        <>
              <OmNav/>
              <h1>{details.Title}</h1>
              {/*<h2>{curOmUser._id}</h2>*/}
              <div className="row">
                <div className="col">
                  <ul className="list-group">
                    <li className="list-group-item">Director: {details.Director} </li>
                    <li className="list-group-item">Release: {details.Released} </li>
                  </ul>
                </div>
                <div className="col">
                  <img src={details.Poster}/>
                </div>

              </div>
              {curOmUser &&
              <div>
                <textarea
                    onChange={(e)=>setReview(e.target.value)}
                    className="form-control"></textarea>
                <button onClick={handlePostReviewBtn}>Post Review</button>
              </div>
              }
              <ul className="list-group">
                {reviews.map((review)=><li className="list-group-item">
                  {review.review}
                  <span className="float-end">
                    <Link to={`/movies/profile/${review.author._id}`}>{review.author.username}</Link>
                  </span>


                </li>)}

              </ul>


              <pre>
                {JSON.stringify(details,null,2)}
              </pre>
        </>

    )

}

export default OmdbDetail;
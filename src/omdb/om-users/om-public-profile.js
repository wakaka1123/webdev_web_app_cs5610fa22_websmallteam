import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "./om-users-thunk";
import {findReviewsByAuthorThunk} from "../review/reviews-thunks";
import {Link} from "react-router-dom";
import {
  findFollowersThunk, findFollowingThunk,
  followUserThunk
} from "../../follows/follows-thunks";

const OmPublicProfile = ()=>{
  const {uid} = useParams()
  const {publicProfile} = useSelector((state)=>state.omusers)
  const {reviews} = useSelector((state)=>state.reviews)
  const {followers,following} = useSelector((state)=>state.follows)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(findUserByIdThunk(uid))
    dispatch(findReviewsByAuthorThunk(uid))
    dispatch(findFollowersThunk(uid))
    dispatch(findFollowingThunk(uid))
  },[uid])

  const handleFollowBtn = ()=>{
    dispatch(followUserThunk({
      followed:uid
    }))
  }

  return (
      <>


        <h1>{publicProfile && publicProfile.username}</h1>
        <button onClick={handleFollowBtn} className="btn btn-success">Follow</button>
        <ul>
          {reviews && reviews.map((review)=>
          <li>
            <Link to={`/movies/details/${review.imdbID}`}>
            {review.review}{review.imdbID}</Link>
          </li>)}

        </ul>
        <h2>Following</h2>
        <div className="list-group">
          {
            following && following.map((follow)=>
              <Link to={`/movies/profile/${follow.followed._id}`} className="list-group-item">
                {follow.followed.username}
                {/*{JSON.stringify(follow,null,2)}*/}
              </Link>
              )
          }

        </div>



        <h2>Followers</h2>
        <div className="list-group">
          {
              followers && followers.map((follow)=>
                  <Link to={`/movies/profile/${follow.follower._id}`} className="list-group-item">
                    {follow.follower.username}
                    {/*{JSON.stringify(follow,null,2)}*/}
                  </Link>
              )
          }

        </div>


      </>
  )

}

export default OmPublicProfile;
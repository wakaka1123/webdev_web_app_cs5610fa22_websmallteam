import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import "./profile.css";
import {findAllAdminUsersThunk} from "./users-admin-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {
    findFollowersThunk,
    findFollowingThunk,
    followUserThunk
} from "../follows/follows-thunk";
import {Link} from "react-router-dom";

const Profile = () => {
    const {uid} = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const {users} = useSelector((state) => state.users)
    const profile = users[window.location.href.split("/").at(-1)]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllAdminUsersThunk())
    }, [])
    const navigate = useNavigate();
    const author = profile != null ? profile._id : "000000000000000000000000";
    const {reviews} = useSelector((state) => state.reviews)
    const name = profile ? profile.role == "Corporate" ? profile.companyName : profile.firstName + " " + profile.lastName : "";
    useEffect(() => {
        dispatch(findReviewsByAuthorThunk(author))
    },[author])
    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [])

    const handleGoBackBtn = () => {
        navigate(-1)
    }
    const {followers,following} = useSelector((state)=>state.follows)
    const handleFollowBtn=()=>{
        dispatch(followUserThunk({
            followed:uid
        }))

    }
    return (
        <>
            <h1 className="mb-5"> {name}'s Profile</h1>
            {
                currentUser && currentUser._id !== author &&
                <button onClick={handleFollowBtn}
                        className="btn btn-success me-2">
                    Follow
                </button>
            }
            <button
                className="btn btn-primary"
                onClick={handleGoBackBtn}>
                Go Back
            </button>
            {
                profile &&
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div>
                                <div>
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="list-group-item">
                                            <h4 className="mb-4 mt-0">About me</h4>


                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="form-label">Name *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="name" value={name} readOnly/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">City *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="city" value={profile.city} readOnly/>
                                                </div>
                                            </div>


                                            <div className="col-md-12">
                                                <label className="form-label">I am ...</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Iam" value={profile.Iam} readOnly/>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div className="row">
                                    <div className="mt-5">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                            <div className="row g-3">
                                                <h4 className="mb-4 mt-0">Social media detail</h4>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-facebook"></i> Facebook</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Facebook" value={profile.facebook}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-twitter"></i> Twitter</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Twitter" value={profile.twitter}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-linkedin"></i> Linkedin</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Linkedin" value={profile.linkedin}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-instagram"></i> Instagram</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Instragram" value={profile.instagram}/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div className="row mt-5">
                                    <div className="col-xxl-12">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                            <div className="row g-3">

                                                <h4 className="mb-4 mt-0">Groups/Links </h4>
                                                <div className="col-md-4">
                                                    <label className="form-label">Related Reviews</label>
                                                    <ul>
                                                        {
                                                            reviews.map((review, i) =>
                                                                <li>
                                                                    <a href={"/details/" + review.placeID}>{review.review}</a>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">Following</label>
                                                    <ul>
                                                        {
                                                            following && following.map((follow)=>
                                                            <li>
                                                                {currentUser._id !== follow.followed._id && <Link to={`/profile/${follow.followed?._id}`}>
                                                                {follow.followed.username}
                                                                </Link>}
                                                                {currentUser._id === follow.followed._id && <Link to={`/profile`}>
                                                                    {follow.followed.username}
                                                                </Link>}
                                                            </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">Followers</label>
                                                    <ul>
                                                        {
                                                            followers && followers.map((follow)=>
                                                                <li>
                                                                    {currentUser._id !== follow.follower._id &&  <Link to={`/profile/${follow.follower?._id}`}>
                                                                        {follow.follower.username}
                                                                </Link>}
                                                                    {currentUser._id === follow.follower._id &&  <Link to={`/profile`}>
                                                                        {follow.follower.username}
                                                                    </Link>}
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={handleGoBackBtn}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}
export default Profile
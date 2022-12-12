import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import "./profile.css";
import {findAllUsersThunk} from "./users-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {
    findFollowersThunk,
    findFollowingThunk,
    followUserThunk
} from "../follows/follows-thunk";

const Profile = () => {
    const {uid} = useParams()
    const {users} = useSelector((state) => state.users)
    const profile = users[window.location.href.split("/").at(-1)]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    const navigate = useNavigate();
    const author = profile != null ? profile._id : "000000000000000000000000";
    const {reviews} = useSelector((state) => state.reviews)
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
            <h1 className="mb-5"> {profile && profile.name}'s Profile</h1>
            <button onClick={handleFollowBtn}
                className="btn btn-success me-2">
                Follow
            </button>
            <button
                className="btn btn-primary"
                onClick={handleGoBackBtn}>
                Go Back to User list
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
                                                           aria-label="name" value={profile.name} readOnly/>
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
                                                                <li>{review.review}</li>
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
                                                                {follow.followed.username}
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
                                                                    {follow.follower.username}
                                                                </li>
                                                            )
                                                        }

                                                    </ul>

                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}
export default Profile
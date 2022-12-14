import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks"
import "./profile.css";
import {findFollowersThunk, findFollowingThunk} from "../follows/follows-thunk";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {followers,following} = useSelector((state)=>state.follows)
    const dispatch = useDispatch()
    const author = currentUser != null ? currentUser._id : "000000000000000000000000";
    const name = currentUser ? currentUser.role === "Corporate" ? currentUser.companyName : currentUser.firstName + " " + currentUser.lastName : "";
    useEffect(() => {
        dispatch(findReviewsByAuthorThunk(author))
        dispatch(findFollowersThunk(author))
        dispatch(findFollowingThunk(author))
    }, [author])

    const handleGoBackBtn = () => {
        navigate(-1)
    }
    const navigate = useNavigate();
    return (
        <>
            {
                !currentUser &&
                <h1 className="mb-5">Please login first to view profile</h1>
            }
            {
                currentUser &&
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <div>
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="list-group-item">
                                            <div className="row">
                                                <div className="col-5">
                                                    <h4>About Me</h4>
                                                </div>
                                                <div className="col-7 text-end">
                                                    <button
                                                        className="rounded-pill btn btn-light bg-secondary text-white"
                                                        onClick={() => navigate("../edit-profile")}>Edit Profile
                                                    </button>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mt-5">
                                                    <label className="form-label">User Name *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="username" value={currentUser.username} readOnly/>
                                                </div>
                                                <div className="col-md-6 mt-5">
                                                    <label className="form-label">Name *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="name" value={name} readOnly/>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="form-label">Email *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="email" value={currentUser.email} readOnly/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">City *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="city" value={currentUser.city} readOnly/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="inputEmail4" className="form-label">Phone Number
                                                        *</label>
                                                    <input type="phoneNumber" className="form-control" id="inputEmail4"
                                                           value={currentUser.phoneNumber} readOnly/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Role *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="role" value={currentUser.role} readOnly/>
                                                </div>

                                            </div>

                                            <div className="col-md-12">
                                                <label className="form-label">I am ...</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Iam" value={currentUser.Iam} readOnly/>
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
                                                           aria-label="Facebook" value={currentUser.facebook}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-twitter"></i> Twitter</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Twitter" value={currentUser.twitter}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-linkedin"></i> Linkedin</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Linkedin" value={currentUser.linkedin}/>
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="form-label"><i
                                                        className="bi bi-instagram"></i> Instagram</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="Instragram" value={currentUser.instagram}/>
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
                                                        <ul className="list-group">
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
                                                    <ul className="list-group">
                                                        {
                                                            following && following.map((follow)=>
                                                                <li>
                                                                    {currentUser._id !== follow.followed._id && <a href={`/profile/${follow.followed?._id}`}>
                                                                        {follow.followed.username}
                                                                    </a>}
                                                                    {currentUser._id === follow.followed._id && <a href={`/profile`}>
                                                                        {follow.followed.username}
                                                                    </a>}
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">Followers</label>
                                                    <ul className="list-group">
                                                        {
                                                            followers && followers.map((follow)=>
                                                                <li>
                                                                    {currentUser._id !== follow.follower?._id &&  <a href={`/profile/${follow.follower?._id}`}>
                                                                        {follow.follower?.username}
                                                                    </a>}
                                                                    {currentUser._id === follow.follower?._id &&  <a href={`/profile`}>
                                                                        {follow.follower?.username}
                                                                    </a>}
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
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks"
import "./profile.css";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    const author = currentUser != null ? currentUser._id : "000000000000000000000000";
    useEffect(() => {
        dispatch(findReviewsByAuthorThunk(author))
    },[author, reviews])

    const navigate = useNavigate();
    return (
        <>
            <h1 className="mb-5">My Profile</h1>
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
                                                        onClick={() => navigate("../edit-profile")}>Edit Profile</button>
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
                                                           aria-label="name" value={currentUser.name} readOnly/>
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
                                                    <label htmlFor="inputEmail4" className="form-label">Phone Number *</label>
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
                                                <h4 className="mb-4 mt-0">Related Reviews </h4>
                                                <ul>
                                                {
                                                    reviews.map((review, i) =>
                                                                <li>{review.review}</li>
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

            }
        </>
    )
}
export default Profile
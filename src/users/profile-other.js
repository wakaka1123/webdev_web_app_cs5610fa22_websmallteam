import {useSelector} from "react-redux";
import NavigationBar from "../home/navigationBar";
import ContactBar from "../home/contactBar";
import React from "react";
import {useNavigate} from "react-router";
import "./profile.css";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const navigate = useNavigate();
    return (
        <>
            {/*<ContactBar/>*/}
            {/*<NavigationBar/>*/}
            <h1>Profile</h1>
            {
                currentUser &&
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="my-5">
                                <h3>user(will change to name of the user) Profile</h3>
                            </div>
                            <div>
                                <div>
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="list-group-item">
                                                <h4 className="mb-4 mt-0">About me</h4>


                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label className="form-label">Name *</label>
                                                    <input type="text" className="form-control" placeholder=""
                                                           aria-label="name" value={currentUser.name} readOnly/>
                                                </div>
                                                <div className="col-md-6">
                                                <label className="form-label">City *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="city" value={currentUser.city} readOnly/>
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
                                                <h4 className="mb-4 mt-0">Groups / Links </h4>

                                                <div className="col-md-3">
                                                    <label className="form-label"><i
                                                        className="fas fa-book-open"></i> Following</label>

                                                </div>

                                                <div className="col-md-3">
                                                    <label className="form-label"><i
                                                        className="fas fa-book-open"></i> Followers</label>

                                                </div>

                                                <div className="col-md-3">
                                                    <label className="form-label"><i
                                                        className="fas fa-book-open"></i> Review</label>

                                                </div>

                                                <div className="col-md-3">
                                                    <label className="form-label"><i
                                                        className="fas fa-book-open"></i> Favorites</label>

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
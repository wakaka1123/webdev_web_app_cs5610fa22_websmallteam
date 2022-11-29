import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {editProfile} from "../profile/profile-reducer";
import { useNavigate } from "react-router";
import './index.css'


const EditItem = (input) => {
    let data = JSON.parse(JSON.stringify(input.post));
    const [profile, update] = useState(data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const editProfileHandler = () => {
        dispatch(editProfile(profile));
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="my-5">
                            <h3>My Profile</h3>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="list-group-item">
                                        <h4>About Me</h4>

                                        <div className="row">
                                            <div className="col-md-6 mt-5">
                                                <label className="form-label">First Name *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="First name" value={profile.firstName}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           firstName: e.target.value})} />
                                            </div>

                                            <div className="col-md-6 mt-5">
                                                <label className="form-label">Last Name *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Last name" value={profile.lastName}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           lastName: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label">Role *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="role" value={profile.role}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           role: e.target.value})}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">City *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="city" value={profile.city}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           city: e.target.value})}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail4" className="form-label">Email *</label>
                                                <input type="email" className="form-control" id="inputEmail4" value={profile.email}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           email: e.target.value})}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Mobile number</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Phone number" value={profile.mobile}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           mobile: e.target.value})}/>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="form-label">I am ...</label>
                                            <input type="text" className="form-control" placeholder=""
                                                   aria-label="Phone number" value={profile.Iam}
                                                   onChange={(e) => update({
                                                       ...profile,
                                                       Iam: e.target.value})}/>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div className="col-xl-4 mt-5">
                                <div className="bg-secondary-soft rounded">
                                    <div className="row g-3">
                                        <h4 className="mb-4 mt-0">Upload Your Photo</h4>
                                        <div className="text-center">

                                            <div className="square position-relative display-2 mb-3">
                                                <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>

                                            <input type="file" id="customFile" name="file" hidden=""/>
                                            <label className="btn btn-success-soft btn-block" for="customFile">Upload</label>
                                            <button type="button" className="btn btn-danger-soft">Remove</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xxl-6 mt-5">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Social media detail</h4>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-facebook"></i> Facebook</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Facebook" value={profile.facebook}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-twitter"></i> Twitter</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Twitter" value={profile.twitter}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-linkedin"></i> Linkedin</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Linkedin" value={profile.linkedin}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-instagram"></i> Instagram</label>
                                                <input type="text" className="form-control" placeholder="" aria-label="Instragram" value={profile.instagram}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-xxl-6 mt-5">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="my-4 mt-0">Change Password</h4>

                                            <div className="col-md-6">
                                                <label for="exampleInputPassword1" className="form-label">Old password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" value={profile.password}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label for="exampleInputPassword2" className="form-label">New password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2"/>
                                            </div>

                                            <div className="col-md-12">
                                                <label for="exampleInputPassword3" className="form-label">Confirm Password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row mb-5 gx-5">
                                <div className="col-xxl-12">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Groups / Links </h4>

                                            <div className="col-md-3">
                                                <label className="form-label"><i className="fas fa-book-open"></i>  Following</label>

                                            </div>

                                            <div className="col-md-3">
                                                <label className="form-label"><i className="fas fa-book-open"></i>  Followers</label>

                                            </div>

                                            <div className="col-md-3">
                                                <label className="form-label"><i className="fas fa-book-open"></i>  Review</label>

                                            </div>

                                            <div className="col-md-3">
                                                <label className="form-label"><i className="fas fa-book-open"></i>  Favorites</label>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gap-3 d-md-flex justify-content-md-end text-center">
                                <button type="button" className="btn btn-secondary btn-lg">Cancel</button>
                                <button type="button" className="btn btn-primary btn-lg" onClick={() => editProfileHandler()}>Update profile</button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default EditItem;
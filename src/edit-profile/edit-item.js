import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {editProfile} from "../users/users-reducer";
import { useNavigate } from "react-router";
import './index.css'
import ContactBar from "../home/contactBar";
import NavigationBar from "../home/navigationBar";
import Select from 'react-select'



const EditItem = (input) => {
    let data = JSON.parse(JSON.stringify(input.post));
    const [profile, update] = useState(data);
    const [role, setRole] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const editProfileHandler = () => {
        dispatch(editProfile(profile));
    };
    const selectOptions = [
        {value: 'Individual-User', label: 'Individual-User'},
        {value: 'Corporate', label: 'Corporate'},
    ]

    const updateProfile = () => {
      editProfileHandler();
      window.history.back();
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
                            <div>
                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                    <div className="list-group-item">
                                        <h4>About Me</h4>

                                        <div className="row">
                                            <div className="col-md-6 mt-5">
                                                <label className="form-label">User Name *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="username" value={profile.username}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           username: e.target.value})} />
                                            </div>

                                            <div className="col-md-6 mt-5">
                                                <label className="form-label">Name *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="name" value={profile.name}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           name: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="form-label">Email *</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="email" value={profile.email}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           email: e.target.value})}/>
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
                                                <label htmlFor="inputEmail4" className="form-label">Phone Number *</label>
                                                <input type="phoneNumber" className="form-control"
                                                       id="inputEmail4"
                                                       value={profile.phoneNumber}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           phoneNumber: e.target.value})}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Role</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="role" value={profile.role}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           role: e.target.value})} readOnly/>
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


                            <div className="row">
                                <div className="mt-5">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0">Social media detail</h4>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-facebook"></i> Facebook</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Facebook" value={profile.facebook}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           facebook: e.target.value})}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-twitter"></i> Twitter</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Twitter" value={profile.twitter}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           twitter: e.target.value})}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-linkedin"></i> Linkedin</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Linkedin" value={profile.linkedin}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           linkedin: e.target.value})}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label"><i className="bi bi-instagram"></i> Instagram</label>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Instragram" value={profile.instagram}
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           instagram: e.target.value})}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-5">
                                    <div className="bg-secondary-soft px-4 py-5 rounded">
                                        <div className="row g-3">
                                            <h4 className="my-4 mt-0">Change Password</h4>

                                            <div className="col-md-6">
                                                <label for="exampleInputPassword2" className="form-label">New password *</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2"
                                                       onChange={(e) => update({
                                                           ...profile,
                                                           password: e.target.value})}/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="gap-3 d-md-flex justify-content-md-end text-center mt-3 mb-3">
                                <button type="button" className="btn btn-secondary btn-lg" onClick={() => navigate("../profile/")}>Cancel</button>
                                <button type="button" className="btn btn-primary btn-lg" onClick={() => updateProfile()}>Update profile</button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default EditItem;
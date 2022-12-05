import React from "react";
import EditItem from "./edit-item";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const EditProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <EditItem key={currentUser._id}  post={currentUser}/>
    );
};

export default EditProfileComponent;
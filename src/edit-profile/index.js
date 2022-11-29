import React from "react";
import EditItem from "./edit-item";
import {useSelector} from "react-redux";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profiles)
    return (
        <EditItem key={profile._id}  post={profile}/>
    );
};

export default EditProfileComponent;
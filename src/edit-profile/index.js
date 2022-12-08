import React from "react";
import EditItem from "./edit-item";
import {useSelector} from "react-redux";

const EditProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    return (
        <>
            <h1>Edit Profile</h1>
            {
                currentUser &&
                <EditItem key={currentUser._id}  post={currentUser}/>
            }
        </>

    );
};

export default EditProfileComponent;
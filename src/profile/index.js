import React from 'react';
import {useSelector} from 'react-redux';
import ProfileItem from './profile-item';
import NavigationBar from "../home/navigationBar";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const profile = useSelector(state => state.profiles)

    return (
        <>
            <NavigationBar/>
            {
                currentUser &&
                <ProfileItem key={profile._id} post={profile} />
            }
            <h1>profile</h1>

        </>
    );
};

export default ProfileComponent;

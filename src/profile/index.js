import React from 'react';
import {useSelector} from 'react-redux';
import ProfileItem from './profile-item';

const ProfileComponent = () => {
    const profile = useSelector(state => state.profiles)
    return (
        <ProfileItem key={profile._id} post={profile} />
    );
};

export default ProfileComponent;

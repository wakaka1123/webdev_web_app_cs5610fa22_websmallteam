import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk, deleteUserThunk} from "./users-admin-thunk";

const UserList = () => {
    const {currentUser, users} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    const deleteUserHandler = (uid) => {
        dispatch(deleteUserThunk(uid))
        dispatch(findAllUsersThunk())
    }
    return (
        <>
            <h1 className="mb-5">All Users</h1>
            {
                !currentUser || (currentUser && currentUser.role !== 'Admin') &&
                    <h1>You do not have permission to view this page</h1>
            }
            {
                currentUser && currentUser.role == 'Admin' &&
                <li className="list-group-item">
                    {
                        Object.entries(users).map(([key, user]) =>
                            currentUser._id !== key &&
                            <div className="row g-0">
                                <div className="col-4">
                                    <a href={"/profile/" + key}>{user.username}</a>
                                </div>
                                <div className="col-8">
                                    <button className="btn btn-primary"
                                       onClick={() => {
                                           deleteUserHandler(key)
                                       }}>
                                        Delete This User
                                    </button>
                                </div>
                            </div>

                        )
                    }
                </li>
            }
        </>
    )
}
export default UserList
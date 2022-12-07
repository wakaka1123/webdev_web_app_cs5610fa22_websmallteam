import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk";
import NavigationBar from "../home/navigationBar";
import ContactBar from "../home/contactBar";
import OtherProfile from "./profile-other";

const UserList = () => {
    const {currentUser, users} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return (
        <>
            {/*<ContactBar/>*/}
            {/*<NavigationBar/>*/}
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    Object.entries(users).map(([key, user]) =>
                        currentUser._id != key &&
                        <li className="list-group-item"
                            key={key}>
                            <a href={"/profile/" + key}>{user.username}</a>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
export default UserList
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk";
import NavigationBar from "../home/navigationBar";
import ContactBar from "../home/contactBar";

const UserList = () => {
    const {users} = useSelector((state) => state.users)
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
                    users.map((user) =>
                    <li className="list-group-item"
                        key={user._id}>
                        {user.username}
                    </li>
                    )
                }
            </ul>
        </>
    )
}
export default UserList
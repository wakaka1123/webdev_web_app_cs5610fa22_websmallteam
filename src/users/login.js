import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import NavigationBar from "../home/navigationBar";
import ContactBar from "../home/contactBar";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    return(
        <>
            <ContactBar/>
            <NavigationBar/>
            <h1>Login</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                placeholder={"Enter username"}
                onChange={(e) => setUsername(e.target.value) }/>
            <input
                className="form-control mb-2"
                type="password"
                value={password}
                placeholder={"Enter password"}
                onChange={(e) => setPassword(e.target.value) }/>
           <button
                onClick={handleLoginBtn}
                className="btn btn-primary">
                Login
            </button>
            {
                currentUser &&
                    <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Login
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {useNavigate} from "react-router";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLoginBtn = async () => {
        setError(null)
        const loginUser = {username, password}
        try {
            const originalPromiseResult = await dispatch(loginThunk(loginUser)).unwrap()
            navigate(-1)
        } catch (error) {
            setError("Unable to login")
        }
    }
    return(
        <>
            <h1 className="mb-5">Login</h1>
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
                    <h2>Welcome {currentUser.role} {currentUser.username}</h2>
            }
        </>
    )
}

export default Login
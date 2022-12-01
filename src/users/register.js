import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "./users-thunk";

const Register = () => {
    const [username, setUsername] = useState('dan')
    const [password, setPassword] = useState('dan123')
    const [validatePassword, setValidatePassword] = useState('dan123')
    const [firstName, setFirstName] = useState('dan')
    const [lastName, setLastName] = useState('lee')
    const [role, setRole] = useState('Individual-User')
    const [email, setEmail] = useState('dan@gmail.com')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h1>Register</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value) }/>
            <input
                className="form-control mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value) }/>
            <input
                className="form-control mb-2"
                value={validatePassword}
                onChange={(e) => setValidatePassword(e.target.value) }/>
            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary">
                Register
            </button>
        </>
    )
}

export default Register
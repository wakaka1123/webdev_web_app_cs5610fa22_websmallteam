import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-corporate-thunk";

const RegisterCorporate = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [role, setRole] = useState('Corporate')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password, companyName, role, email}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h1>Corporate Register</h1>
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
            <input
                className="form-control mb-2"
                type="password"
                value={validatePassword}
                placeholder={"Reenter password"}
                onChange={(e) => setValidatePassword(e.target.value) }/>
            <input
                className="form-control mb-2"
                value={companyName}
                placeholder={"Enter your company name"}
                onChange={(e) => setCompanyName(e.target.value) }/>
            <input
                className="form-control mb-2"
                value={email}
                placeholder={"Enter email"}
                onChange={(e) => setEmail(e.target.value) }/>
            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary">
                Register
            </button>
            {
                currentUser &&
                <h2>Welcome {currentUser.role} {currentUser.username}</h2>
            }
        </>
    )
}

export default RegisterCorporate
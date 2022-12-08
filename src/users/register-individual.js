import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-individual-thunk";

const RegisterIndividual = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState('Individual-User')
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
        const newUser = {username, password, firstName, lastName, role, email}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h1>Individual User Register</h1>
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
                value={firstName}
                placeholder={"Enter your first name"}
                onChange={(e) => setFirstName(e.target.value) }/>
            <input
                className="form-control mb-2"
                value={lastName}
                placeholder={"Enter your last name"}
                onChange={(e) => setLastName(e.target.value) }/>
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

export default RegisterIndividual
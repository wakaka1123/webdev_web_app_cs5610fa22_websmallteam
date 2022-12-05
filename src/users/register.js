import React, {useState} from "react";
import Select from 'react-select';
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import NavigationBar from "../home/navigationBar";
import ContactBar from "../home/contactBar";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [name, setName] = useState('')
    const selectOptions = [
        {value: 'Individual-User', label: 'Individual-User'},
        {value: 'Corporate', label: 'Corporate'},
    ]
    const [role, setRole] = useState('')
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
        const newUser = {username, password, name, role, email}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <ContactBar/>
            <NavigationBar/>
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
                value={name}
                placeholder={"Enter your name/company name"}
                onChange={(e) => setName(e.target.value) }/>
            <Select
                className="mb-2"
                options={selectOptions}
                onChange={(e) => setRole(Object.entries(e)[0][1])}
            />
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
                <h2>Welcome {currentUser.username}</h2>
            }
        </>
    )
}

export default Register
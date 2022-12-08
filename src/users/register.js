import React from "react";
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const handleRegisterIndividualBtn = () => {
        navigate('./individual')
    }

    const handleRegisterICorporateBtn = () => {
        navigate('./corporate')
    }

    return (
        <>
            <br/>
            <button className="btn btn-primary" onClick={handleRegisterIndividualBtn}>
                Individual User Register
            </button>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={handleRegisterICorporateBtn}>
                Corporate User Register
            </button>
        </>
    )
}

export default Register
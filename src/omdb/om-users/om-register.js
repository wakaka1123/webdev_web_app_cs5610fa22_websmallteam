import OmNav from "../omNav";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {omRegisterThunk} from "./om-users-thunk";

import {Navigate} from "react-router";

const OmRegister = () =>{
  const [username,setUsername] = useState('alice')
  const [password,setPassword] = useState('123')
  const [validatePassword,setValidatePassword] = useState('123')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const curOmUser = useSelector((state)=>state.omusers.currentOmUser)
  if(curOmUser){
    return(
        <Navigate to={'/movies/profile'}/>
    )
  }



  const handleRegisterBtn =()=>{
    if(password !== validatePassword) {
      setError('Password not match')
      return
    }
      setError('')
      dispatch(omRegisterThunk({username,password}))

  }



  return (


      <>
        <OmNav/>
        <h1>Register</h1>
        {error&&    <div className="alert alert-danger">
          {error}
        </div> }


        <input
            className="form-control mb-2"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
        <input
            className="form-control mb-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        <input
            className="form-control mb-2"
            value={validatePassword}
            onChange={(e)=>setValidatePassword(e.target.value)}/>

        <button onClick={handleRegisterBtn}
            className="btn btn-primary w-100">Register</button>


        {
            curOmUser &&
            <h2>Welcome {curOmUser.username}</h2>
        }
      </>
  )

}
export default OmRegister;
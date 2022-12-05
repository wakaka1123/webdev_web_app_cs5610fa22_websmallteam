import OmNav from "../omNav";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {omLoginThunk} from "./om-users-thunk";
import {Navigate} from "react-router";

const OmLogin = () =>{
  const [username,setUsername] = useState('alice')
  const [password,setPassword] = useState('123')

  const [error, setError] = useState('')
  const dispatch = useDispatch()
 // const {curOmUser} = useSelector((state)=>state.omusers)
  const curOmUser = useSelector((state)=>state.omusers.currentOmUser)
  if(curOmUser){
    return(
        <Navigate to={'/movies/profile'}/>
    )
  }
  const handleLoginBtn =()=>{

      setError('')
      const loginUser = {username, password}
      dispatch(omLoginThunk(loginUser))

  }



  return (


      <>
        <OmNav/>
        <h1>Login</h1>
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


        <button onClick={handleLoginBtn}
            className="btn btn-primary w-100">Login</button>
        {
            curOmUser &&
            <h2>Welcome {curOmUser.username}</h2>
        }


      </>
  )

}
export default OmLogin;
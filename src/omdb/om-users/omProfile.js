import {useDispatch, useSelector} from "react-redux";
import OmNav from "../omNav";
import {omLogoutThunk} from "./om-users-thunk";

const OmProfile=()=>{
    const currentOmUser= useSelector((state)=>state.omusers.currentOmUser)
  const dispatch = useDispatch()
  const handleOmLogout = ()=>{
      dispatch(omLogoutThunk())
  }
    return (

        <>
          <OmNav/>
          <h1>Profile</h1>
          {currentOmUser && <h2>Welcome {currentOmUser.username}</h2>}
          <button className="btn btn-danger" onClick={handleOmLogout}>
            Logout
          </button>
        </>


    )

}
export default OmProfile;
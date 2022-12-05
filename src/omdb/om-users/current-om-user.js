import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {omProfileThunk} from "./om-users-thunk";

const CurrentOmUser = ({children}) =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(omProfileThunk())

    },[])
    return (
        children
    )

}

export default CurrentOmUser;
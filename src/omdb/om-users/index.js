import {useEffect, useState} from "react";
import axios from "axios";
import * as service from './om-users-service.js'
import {useDispatch, useSelector} from "react-redux";
import {findAllOmUsersThunk} from "./om-users-thunk";
import OmNav from "../omNav";

const OmUserList = () =>{

  //introduce reducer to manage all states
  //const [users,setUsers] = useState([])
  const {omusers} = useSelector((state)=>state.omusers)


  //wrap up in service
  // const findAllOmUsers = async ()=>{
  //   const response = await axios.get('http://localhost:4000/movies/om-users')
  //   const users= response.data
  //   setUsers(users)
  // }

  // const findAllOmUsers = async () =>{
  //   const users= await service.findAllOmUsers()
  //   setUsers(users)
  // }
  const dispatch = useDispatch()



  useEffect(()=>{
      // findAllOmUsers()
    dispatch(findAllOmUsersThunk())
  },[])


  return (
      <>
        <OmNav/>
        <h1>Users {omusers.length}</h1>
        <ul className="list-group">{
          omusers.map((omusers)=>
              <li className="list-group-item" key={omusers._id}>
                {omusers.username}
              </li>
            )

        }</ul>

      </>

  )
}
export default OmUserList;
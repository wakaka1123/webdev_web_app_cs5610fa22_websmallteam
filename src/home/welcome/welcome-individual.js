import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {welcomeIndividualThunk} from "./welcome-thunk";


const WelcomeIndividual = () =>{
  const newIndividualUsers = useSelector((state) => state.welcomeIndividualUser)
  const userArray = Object.values(newIndividualUsers)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(welcomeIndividualThunk())
  },[])

  return (
      <ul className="list-group">
        <li className="list-group-item active">Welcome new users</li>
        {
          userArray?.map((item)=>
              <li className="list-group-item" key={item._id}>{item.username}</li>
          )
        }
      </ul>
  )
}

export default WelcomeIndividual;
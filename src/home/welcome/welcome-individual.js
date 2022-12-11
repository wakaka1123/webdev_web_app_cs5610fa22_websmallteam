import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {welcomeIndividualThunk} from "./welcome-thunk";
import {Link} from "react-router-dom";


const URL =  'localhost://3000'

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
              <li className="list-group-item" key={item._id}>
                <Link to={`/profile/${item._id}`} style={{textDecoration: "none"}}>
                  {item.username}
                </Link>
              </li>
          )
        }
      </ul>
  )
}

export default WelcomeIndividual;
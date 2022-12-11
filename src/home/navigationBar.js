import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutThunk} from "../users/users-thunk";

const NavigationBar = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    return (
        <div className="container">
            <div className="row">

                <div className="col-xl-7">
                    <h1>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <span className="text-dark">TRAVEL</span>
                            <span className="text-danger">ER</span>
                        </Link>
                    </h1>
                    {
                        currentUser &&
                        <h6>
                            <div className="col-5 text-primary"> Welcome, {currentUser.username}</div>
                        </h6>
                    }
                </div>

                <div className="col-xl-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="/search" className="nav-link">Search</a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a href="/" className="nav-link">About</a>*/}
                    {/*</li>*/}
                    {/*<li className="nav-item">*/}
                    {/*    <a href="/" className="nav-link">Contact</a>*/}
                    {/*</li>*/}
                    {
                        currentUser && currentUser.username === 'admin' &&
                        <>
                            <li className="nav-item">
                                <a href="/users" className="nav-link"> View All Users</a>
                            </li>
                        </>
                    }
                    {
                        currentUser &&
                        <>
                            <li className="nav-item">
                                <a href="/profile" className="nav-link">View My Profile</a>
                            </li>
                            <button className="btn btn-primary" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    }
                    {
                        !currentUser &&
                        <>
                            <li className="nav-item">
                                <a href="/login" className="nav-link"> Login</a>
                            </li>
                            <li className="nav-item">
                                <a href="/register" className="nav-link"> Register</a>
                            </li>
                        </>
                    }
                </ul>
                </div>
            </div>


        </div>




    )


}

export default NavigationBar;
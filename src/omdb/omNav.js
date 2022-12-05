import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const OmNav = () => {
  const curOmUser = useSelector((state)=>state.omusers.currentOmUser)
  const {pathname} = useLocation()
  const parts =pathname.split('/')
  //console.log(parts[1]+parts[2])
  // console.log(curOmUser)


  const screens = [
      'movies/',
      'movies/search',
      'movies/allmovies',
      'movies/om-users',
      // 'movies/register',
      // 'movies/login',
      // 'movies/profile',
  ]

  if(curOmUser){
    screens.push( 'movies/profile')
  } else {
    screens.push('movies/login')
    screens.push('movies/register')

  }



  return (

      <ul className="nav nav-pills">
        {/*<li className="nav-item">*/}
        {/*  <Link to="/movies"*/}
        {/*    className={`nav-link ${parts[2] === undefined ?'active': ''}`}*/}
        {/*  >Home</Link>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
        {/*  <Link to="/movies/search"*/}
        {/*        className={`nav-link ${parts[2] === 'search'?'active': ''}`}*/}
        {/*  >Search</Link>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
        {/*  <Link to="/movies/allmovies"*/}
        {/*        className={`nav-link ${parts[2] === 'allmovies'?'active': ''}`}*/}
        {/*  >All Movies</Link>*/}
        {/*</li>*/}
        {/*<li className="nav-item">*/}
        {/*  <Link to="/movies/om-users"*/}
        {/*        className={`nav-link ${parts[2] === 'om-users'?'active': ''}`}*/}
        {/*  >Users</Link>*/}
        {/*</li>*/}
        {screens.map((screen)=>
            <li className="nav-item text-capitalize">
              <Link to={`/${screen}`}
                    className={`nav-link ${parts[1]+'/'+parts[2] === screen?'active': ''}`}
              >{screen.split('/').pop().length ===0?  `Home`:screen.split('/').pop()}</Link>

            </li>

        )}



      </ul>



  )

}

export default OmNav;
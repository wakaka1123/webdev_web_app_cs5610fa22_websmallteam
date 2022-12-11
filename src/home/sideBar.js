import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[1];

  // console.log(paths.length)
  // console.log(paths)
  return (   <div className="list-group">



    <Link to="/" className={`list-group-item ${active === ''?'active':''}`}>
      <i className="bi bi-house-door-fill"/> Home
    </Link>
    <Link to="/search" className={`list-group-item ${active === 'search'?'active':''}`}>
      <i className="bi bi-browser-edge"/> Search
    </Link>
    <Link to="/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
      <i className="bi bi-person-circle"/> Profile
    </Link>
    {/*<a href="/" className={`list-group-item*/}
    {/*                ${active === 'messages'?'active':''}`}>*/}
    {/*  <i className="bi bi-chat-left-text-fill"/> Reviews*/}
    {/*</a>*/}

  </div>);
};
export default NavigationSidebar;
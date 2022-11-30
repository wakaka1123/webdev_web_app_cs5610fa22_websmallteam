


const NavigationBar = () => {
  return (
      <div className="container">
      <div className="row">
        <div className="col-1"/>

          <div className="col-5">

            <h1 className="m-0 text-danger">
              <span className="text-dark">TRAVEL</span>
              <span>ER</span>
            </h1>


          </div>

        <ul className="col-6 pt-2 nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link">Search</a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-link">Profile</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Contact</a>
          </li>
          <li className="nav-item">
            <div className="nav-link">Hello to Logged in/Anonymous User</div>
          </li>
        </ul>





      </div>
      </div>



  )



}

export default NavigationBar;
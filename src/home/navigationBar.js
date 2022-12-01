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
                        <a href="/users" className="nav-link"> View All Users</a>
                    </li>
                    <li className="nav-item">
                        <a href="/register" className="nav-link"> Register</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link"> Login</a>
                    </li>
                </ul>


            </div>
        </div>


    )


}

export default NavigationBar;
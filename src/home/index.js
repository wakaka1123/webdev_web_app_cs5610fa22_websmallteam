import TopNav from "../topnav";


const HomePage = () =>{
  return (
      <>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
        <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
          <link href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />


        <TopNav/>
        <h1>home page</h1>

        {/*topbar start*/}
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                  <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                  <p className="text-body px-3">|</p>
                  <p><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
                </div>
              </div>
              <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                  <a className="text-primary px-3" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-primary px-3" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-primary px-3" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="text-primary px-3" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="text-primary pl-3" href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*topbar end*/}


        {/*nav bar end*/}
        <div className="container-fluid position-relative nav-bar p-0">
          {/*<div className="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">*/}
            {/*<nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">*/}
              <a href="" className="navbar-brand">
                <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div className="navbar-nav ml-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="about.html" className="nav-item nav-link">About</a>
                  <a href="service.html" className="nav-item nav-link">Services</a>
                  <a href="package.html" className="nav-item nav-link">Tour Packages</a>
                  <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu border-0 rounded-0 m-0">
                      <a href="blog.html" className="dropdown-item">Blog Grid</a>
                      <a href="single.html" className="dropdown-item">Blog Detail</a>
                      <a href="destination.html" className="dropdown-item">Destination</a>
                      <a href="guide.html" className="dropdown-item">Travel Guides</a>
                      <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
              </div>
            {/*</nav>*/}
          {/*</div>*/}
        </div>
        {/*navbar end*/}



        {/*Carousel Start*/}
        <div className="container-fluid p-0">
          <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" >
                      <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                      <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                      <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                    </div>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" >
                      <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                      <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                      <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                    </div>
                  </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
              <div className="btn btn-dark" >
                <span className="carousel-control-prev-icon mb-n2"/>
              </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
              <div className="btn btn-dark" >
                <span className="carousel-control-next-icon mb-n2"/>
              </div>
            </a>
          </div>
        </div>
        {/*Carousel End*/}




      </>


  )


}

export default HomePage;
const ContactBar =()=>{
  return (
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        {/*<div className="container">*/}
          <div className="row">


            <div className="col-lg-1 mb-2 mb-lg-0"/>

            <div className="col-lg-5  mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p><i className="bi bi-envelope-fill"></i>info@example.com</p>
                <p className="px-3">|</p>
                <p><i className="bi bi-telephone-fill"></i>+012 345 6789</p>
              </div>
            </div>

            <div className="col-lg-6 text-center text-lg-right">
              {/*<div className="d-inline-flex align-items-center">*/}
                <a className="text-dark px-3" href="">
                  <i className="bi bi-facebook"/>
                </a>
                <a className="text-dark px-3" href="">
                  <i className="bi bi-twitter"/>
                </a>
                <a className="text-dark px-3" href="">
                  <i className="bi bi-linkedin"/>
                </a>
                <a className="text-dark px-3" href="">
                  <i className="bi bi-instagram"/>
                </a>
                <a className="text-dark px-3" href="">
                  <i className="bi bi-youtube"/>
                </a>
              </div>
            </div>
          {/*</div>*/}
        {/*</div>*/}
      </div>
  )
}
export default ContactBar;
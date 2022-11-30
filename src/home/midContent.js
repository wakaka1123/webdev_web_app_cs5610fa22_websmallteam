const MidContent = ()=> {
  return(
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-5">
              <img width={800} src={"/img/poster.png"} alt=""/>

            </div>
            <div className="col-6">
              <br/>
              <br/>
              <div className="card" >
                <div className="card-body">
                  <h8 className="card-title text-success">Special title treatment</h8>
                  <p className="card-text">
                    <h1 className="fw-bold">We Provide Best Tour Packages In Your Budget</h1>

                    With supporting text below as a
                    natural lead-in to additional content.</p>

                  <div className="row">
                    <div className="col-6 ">
                      <img width={240} src={"/img/tourist-selfie.jpg"}/>

                    </div>
                    <div className="col-6 ">
                      <img width={240} src={"/img/tourist-beach.jpg"}/>
                    </div>
                  </div>
                  <div className="mt-3 container">


                  <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

            </div>


          </div>







        </div>
        <div className="list-group-item">
          <div className="row">


            <div className="col-1 text-center">
              <div className="bg-warning align-items-center">
                  <br/>
                <i className="bi bi-credit-card-fill text-white"/>
                  <br/>
                  <br/>
              </div>
            </div>

            <div className="col-3">
              <div className="fw-bold">Competitive Pricing</div>
              <div>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</div>
            </div>

            <div className="col-1 text-center">
              <div className="bg-warning align-items-center">
                <br/>
                <i className="bi bi-award text-white"/>
                <br/>
                <br/>
              </div>
            </div>

            <div className="col-3">
              <div className="fw-bold">Best Services</div>
              <div>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</div>
            </div>

            <div className="col-1 text-center">
              <div className="bg-warning align-items-center">
                <br/>
                <i className="bi bi-globe-asia-australia text-white"/>
                <br/>
                <br/>
              </div>
            </div>

            <div className="col-3">
              <div className="fw-bold">Worldwide Coverage</div>
              <div>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</div>
            </div>




          </div>
        </div>


      </div>







  )


}

export default MidContent;
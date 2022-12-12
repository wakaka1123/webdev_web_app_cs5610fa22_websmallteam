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
                  <h8 className="card-title text-success">Here is the Web App User Guide</h8>
                  <p className="card-text">
                    <h1 className="fw-bold">We Provide Best Tour Guide In Your Budget</h1>

                    Click the search button on navigation bar or below to find destination cities,restaurants or museums.
                    <div>
                      You can post review on search details, follow users and view other users public profile.
                    </div>
                  </p>

                  <div className="row">
                    <div className="col-6 ">
                      <img width={240} src={"/img/tourist-selfie.jpg"}/>

                    </div>
                    <div className="col-6 ">
                      <img width={240} src={"/img/tourist-beach.jpg"}/>
                    </div>
                  </div>
                  <div className="mt-3 container">


                  <a href="/search" className="btn btn-primary">Go somewhere</a>
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
              <div className="fw-bold">Search Tourist Destinations</div>
              <div>We provide three types of tourist destinations to select, including cities, restaurants and museums.</div>
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
              <div className="fw-bold">Post Reviews</div>
              <div>User can post reviews on specific destinations to share unique tourist experiences and stories.</div>
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
              <div className="fw-bold">Interact with users</div>
              <div>View public profile and follow function facilitate users to keep update their information and elaborate more chances building own social networks.</div>
            </div>




          </div>
        </div>


      </div>







  )


}

export default MidContent;
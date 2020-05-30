import React from 'react'

const Details = (props) => {
  return (
    <div className="details-page">
      <div className="container">

        {/* Page content */}
        <div className="container-fluid">
          <h1><i className="la la-bullseye text-danger" /> Incident Report</h1>
          <div className="row">
            <div className="col-xl-4 order-xl-2">
              <div className="card card-profile shadow1 border-none mb-3">
                <img src="https://blog-assets.busbud.com/wp-content/uploads/2019/11/Sunnylvsfjorden-fjord-canyon.png" alt="Image placeholder" className="card-img-top" />
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img src="../assets/img/theme/team-4.jpg" className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info  mr-4 ">Connect</a>
                    <a href="#" className="btn btn-sm btn-default float-right">Message</a>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h5 className="h3">
                      Jessica Jones<span className="font-weight-light">, 27</span>
                    </h5>
                    <div className="h5 font-weight-300">
                      <br />
                      <i className="ni location_pin mr-2" />Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />University of Computer Science
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-8 order-xl-1">
              <div className="card shadow1 border-none">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0"> <i className="la la-map-marker" /> Location Information</h3>
                    </div>
                    <div className="col-4 text-right">
                      <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <h6 className="heading-small text-muted mb-4">Related information</h6>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
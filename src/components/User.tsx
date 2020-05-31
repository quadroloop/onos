import React from 'react'
import img_placeholder from '../assets/mapb.png'
import logo from '../assets/onos_mast.svg'



const User = (props) => {
  return (
    <>
      <div className="user-page">


        <div className="header">
          <div className="nav-logo ml-2" onClick={() => { window.location.href = '/' }}>
            <img src={logo} alt="onos-logo" />
            <h3>ONOS</h3>
          </div>

          <div className="nav-group">
            <span
              onClick={() => { window.location.href = "/" }}
              className=""><i className="la la-user-shield mr-2" />
              <strong>Demo as Admin</strong>
            </span>
          </div>
        </div>



        <div className="user-banner normal">
        </div>

        <div className="user-panel">
          <div className="details-page">
            <div className="container">

              {/* Page content */}
              <div className="container-fluid">
                <h1><i className="la la-user text-danger" /> User Profile</h1>
                <div className="row">
                  <div className="col-xl-4 order-xl-2">
                    <div className="card card-profile shadow1 border-none mb-3">
                      <img src={img_placeholder} alt="Image placeholder" className="card-img-top" />


                      <>
                        <div className="row justify-content-center mt--5">
                          <div className="col-lg-3 order-lg-2">
                            <div className="card-profile-image">
                              <a href="#">
                                <img src="https://avatars1.githubusercontent.com/u/29462205?s=460&u=4509023c1c8946e206197eca17cdd589572249c0&v=4" className="rounded-circle" />
                              </a>
                            </div>
                          </div>
                        </div>


                      </>


                      <div className="card-body pt-5 mt-5">

                        <div className="text-center">
                          <h5 className="h3">
                            Bryce Mercines
                    </h5>
                          <div className="h5 font-weight-300">
                            <br />
                            Manila, Philippines
                    </div>
                          <div className="h5 mt-4">
                            Address:
                    </div>
                          <div>
                            Lorem Ipsum Dolor simet
                    </div>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="col-xl-8 order-xl-1">



                    <div className="card shadow1 border-none mb-3">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h3 className="mb-0"> <i className="la la-map-marker text-primary" /> Pin Location</h3>

                          </div>
                        </div>
                        <div className="card-body px-0">
                          <div>
                            <h6 className="heading-small text-muted mb-4">Recent Incident Reports</h6>
                            <div className="content-block">
                              <span>this is some data</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-default d-block"> <i className="la la-directions" /> Pin Location</button>
                    </div>



                    <div className="card shadow1 border-none mb-3">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h3 className="mb-0"> <i className="la la-bullseye text-primary" />Incident Reports</h3>

                          </div>
                        </div>
                        <div className="card-body px-0">
                          <div>
                            <h6 className="heading-small text-muted mb-4">Recent Incident Reports</h6>
                            <div className="content-block">
                              <span className="small">Note: This is just a Demo. No personal information will be disclosed or taken without permission.</span>
                            </div>

                            <hr />
                            <span className="heading-small text-muted mb-4">New incident report</span>

                            <textarea className="form-control" placeholder="Description" />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-danger d-block danger-btn"> <i className="la la-send" /> Send Report</button>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User;
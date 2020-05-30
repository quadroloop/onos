import React from 'react'
import img_placeholder from '../assets/mapx.png'


const User = (props) => {
  return (
    <>
      <div className="user-page">
        <div className="user-header">
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
                            Lorem Ipsum Dolor simet
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
                          {/* <div className="col-4 text-right">
                      <a href="#!" className="btn btn-sm btn-primary">Settings</a>
                    </div> */}
                        </div>
                      </div>
                      <div className="card-body">
                        <div>
                          <h6 className="heading-small text-muted mb-4">Related information</h6>
                          <div className="content-block">
                            <span>this is some data</span>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-default d-block"> <i className="la la-directions" /> Pin Location</button>
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
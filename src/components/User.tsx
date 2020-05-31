import React, { useEffect } from 'react'
import img_placeholder from '../assets/mapb.png'
import logo from '../assets/onos_mast.svg'
import { guid } from './Utilities';
import { userInfo } from 'os';



const User = (props) => {



  useEffect(() => {

    function getRandomArbitrary(min, max) {
      return (Math.random() * (max - min) + min).toFixed(0);
    }

    if (!localStorage.userInfo) {
      let userInfo = {
        uid: guid(),
        name: `Demo User: (${Math.floor(1000 + Math.random() * 9000)})`,
        profileImage: `./img/p${getRandomArbitrary(1, 6)}.png`,
        location: null,
        address: ""
      }

      localStorage.userInfo = JSON.stringify(userInfo)
    }
  }, [])

  const userInfo = () => {
    return JSON.parse(localStorage.userInfo)
  }

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

              <div className="container-fluid">
                <h1><i className="la la-user text-danger" /> User Profile</h1>

                {localStorage.userInfo && (
                  <div className="row">


                    <div className="col-xl-4 order-xl-2 fade-in">
                      <div className="card card-profile shadow1 border-none mb-3">
                        <img src={img_placeholder} alt="Image placeholder" className="card-img-top" />
                        <>
                          <div className="row justify-content-center mt--5">
                            <div className="col-lg-3 order-lg-2">
                              <div className="card-profile-image">
                                <a href="#">
                                  <img src={userInfo().profileImage} className="rounded-circle shadow1" />
                                </a>
                              </div>
                            </div>
                          </div>


                        </>


                        <div className="card-body pt-5 mt-5">

                          <div className="text-center">
                            <h5 className="h3">
                              {userInfo().name}
                            </h5>
                            <div className="h5 font-weight-300">
                              <br />
                              {}
                            </div>
                            {userInfo().location && (
                              <>
                                <div className="h5 mt-4">
                                  Address:
                         </div>
                                <div>
                                  Lorem Ipsum Dolor simet
                         </div>
                              </>
                            )}
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


                      {/* details thread */}
                      {userInfo().location && (
                        <>


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

                                  <div className="table-responsive mt-3">
                                    {/* Projects table */}
                                    <table className="table align-items-center table-flush">
                                      <thead className="thead-light">
                                        <tr>
                                          <th scope="col">Description</th>
                                          <th scope="col">Date</th>
                                          <th scope="col">Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th scope="row">/argon/</th>
                                          <td>4,569</td>
                                          <td>
                                            <button className="btn btn-warning btn-sm">Pending</button>
                                          </td>
                                        </tr>

                                      </tbody>
                                    </table>
                                  </div>

                                  <hr />
                                  <span className="heading-small text-muted mb-4">New incident report</span>

                                  <textarea className="form-control p-3" placeholder="Description" />
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-danger d-block danger-btn"> <i className="la la-send" /> Send Report</button>
                          </div>

                        </>
                      )}



                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User;
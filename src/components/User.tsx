import React, { useEffect, useState } from 'react'
import img_placeholder from '../assets/mapb.png'
import logo from '../assets/onos_mast.svg'
import { guid } from './Utilities';
import nprogress from 'nprogress'
import swal from 'sweetalert2'


const PinBanner = () => {
  return (
    <div className="pin-banner">
      <img src="./img/pin-banner.gif" />
      <div className="content-block text-center">
        <span>
          Please provide your location to learn more about risk points near you, or to be able to send incident reports and call for help.</span>
      </div>
    </div>
  )
}


const User = (props) => {

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {

    nprogress.start()

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
      setUserInfo(userInfo)
      nprogress.done()
    } else {
      let data = JSON.parse(localStorage.userInfo)
      setUserInfo(data)
      nprogress.done()
    }
  }, [])

  const newAccount = () => {
    localStorage.clear();
    window.location.reload()
  }



  const setPosition = (position) => {
    let newLocation = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    }

    localStorage.currentPosition = JSON.stringify(newLocation)

    // update user location

    let userData = userInfo;
    userData.location = newLocation;
    localStorage.userInfo = JSON.stringify(userData)

    setTimeout(() => {
      nprogress.done()
      window.location.reload();
    }, 1500)

    swal.fire({
      title: "Success",
      text: "location set successfully!",
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1200,
    })
  }


  const displayError = (error) => {
    var errors = {
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    };
    swal.fire("Error!", `Geo Location API : ${errors[error.code]}`, 'error');
    nprogress.done()
  }

  const requestlocation = () => {
    nprogress.start()
    swal.fire({
      title: "Requesting",
      text: "kindly accept to location prompt to pin down your current location.",
      icon: "info",
      showConfirmButton: false,
      showCancelButton: true,
      allowOutsideClick: false
    })

    swal.showLoading()

    if (navigator.geolocation) {
      var timeoutVal = 10 * 1000 * 1000;
      navigator.geolocation.getCurrentPosition(
        setPosition,
        displayError,
        { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
      )
    } else {
      swal.fire("Error", "GPS is not supported for your device", "error")
    }

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

                {userInfo && (
                  <div className="row">


                    <div className="col-xl-4 order-xl-2 fade-in">
                      <div className="card card-profile shadow1 border-none mb-3">
                        <img src={img_placeholder} alt="Image placeholder" className="card-img-top" />
                        <>
                          <div className="row justify-content-center mt--5">
                            <div className="col-lg-3 order-lg-2">
                              <div className="card-profile-image">
                                <a href="#">
                                  <img src={userInfo.profileImage} className="rounded-circle shadow1" />
                                </a>
                              </div>
                            </div>
                          </div>


                        </>


                        <div className="card-body pt-5 mt-5">

                          <div className="text-center">
                            <h5 className="h3">
                              {userInfo.name}
                            </h5>
                            <div className="h5 font-weight-300">
                              <br />
                              {}
                            </div>
                            {userInfo.location && (
                              <>
                                <div className="h5 mt-4">
                                  Address:
                         </div>
                                <div>
                                  Lorem Ipsum Dolor simet
                         </div>
                              </>
                            )}

                            <button className="btn btn-default mt-3" onClick={newAccount}> <i className="la la-user" /> New Demo Account</button>
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
                              <PinBanner />
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={requestlocation}
                          className="btn btn-default d-block"> <i className="la la-map-marker" /> Pin Location</button>
                      </div>


                      {/* details thread */}
                      {userInfo.location && (
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
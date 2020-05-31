import React, { useState, useEffect } from 'react'
import img_placeholder from '../assets/mapb.png'
import WeatherDetails from './WeatherDetails';
import CovidDetails from './CovidDetails';
import LocationDetails from './LocationDetails';
import { googleMapsAPIKEY } from './Utilities'
import axios from 'axios'
import moment from 'moment'

const Details = (props) => {

  const [location, setlocationData] = useState(null)

  const report = JSON.parse(localStorage.currentIncident)

  const fetchLocationDetails = () => {
    let loc = JSON.parse(localStorage.currentLocation)
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?`, {
      params: {
        latlng: `${loc.lat},${loc.long}`,
        key: googleMapsAPIKEY
      }
    })
      .then(res => {
        console.log(res.data.results)
        setlocationData(res.data.results)
      })
  }

  useEffect(() => {
    fetchLocationDetails()
  }, [])

  return (
    <div className="details-page">
      <div className="container">

        {/* Page content */}

        <div className="container-fluid">
          {localStorage.dtype !== "incident" ? (
            <h1><i className="la la-indent text-primary" /> More Details</h1>
          ) : (
              <h1><i className="la la-bullseye text-danger" /> Incident Report</h1>
            )}
          <div className="row">

            {localStorage.dtype === "incident" && (
              <div className="col-xl-4 order-xl-2 fade-in">
                <div className="card card-profile shadow1 border-none mb-3">
                  <img src={img_placeholder} alt="Image placeholder" className="card-img-top" />


                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image mt--5">
                      </div>
                    </div>
                  </div>

                  <div className="card-header text-center border-0 pt-2 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <a href="#" className="btn btn-sm btn-info  mr-4 "
                        onClick={() => {
                          document.getElementById('ver-btn').click()
                        }}
                      >Verify</a>
                      <a href="#"
                        onClick={() => {
                          document.getElementById('genDetails').click();
                        }}
                        className="btn btn-sm btn-default float-right">Dismiss</a>
                    </div>
                  </div>



                  <div className="card-body">

                    <div className="text-center mt--5">
                      <h5 className="h3">
                        Report Details
                      </h5>
                      <div className="h5 font-weight-300">
                        <br />
                        {moment(report.timestamp).format('MMMM D, YYYY')}
                      </div>
                      <div className="h5 mt-4">
                        {report.details}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}


            <div className={localStorage.dtype === "incident" ? "col-xl-8 order-xl-1" : "container"}>

              <LocationDetails
                data={location}
              />

              {location && (
                <CovidDetails {...props} location={location} />
              )}

              <WeatherDetails />

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Details;
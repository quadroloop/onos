import React from 'react'

const LocationDetails = () => {
  return (
    <div className="card shadow1 border-none mb-3">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0"> <i className="la la-map-marker text-primary" /> Location Information</h3>
          </div>

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
      <button className="btn btn-default d-block"> <i className="la la-directions" /> Get Directions</button>
    </div>
  )
}

export default LocationDetails;
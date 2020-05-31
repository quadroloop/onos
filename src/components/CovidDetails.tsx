import React from 'react'

const CovidDetails = () => {

  const location = JSON.parse(localStorage.currentLocation);


  return (
    <div className="card shadow1 border-none mb-3">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0"> <i className="la la-comment-medical text-danger" /> COVID-19 Information</h3>
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
    </div>
  )
}

export default CovidDetails;
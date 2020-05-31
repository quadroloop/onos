import React from 'react'
import SegmentLoader from './SegmentLoader';
import { normalizeText } from './Utilities'

const LocationDetails = (props) => {
  const loc = JSON.parse(localStorage.currentLocation)
  const oloc = JSON.parse(localStorage.originLocation)
  return (
    <>
      <div className="card shadow1 border-none mb-3 fade-in">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="mb-0"> <i className="la la-map-marker text-primary" /> Location Information</h3>
            </div>
          </div>
        </div>
        {props.data ? (
          <>
            <div className="card-body">
              <div>
                <h2>{props.data[0].formatted_address}</h2>
                {
                  props.data.map(details => {
                    return (
                      <div className="mb-3">
                        <h6 className="heading-small text-muted mb-2">
                          <i className="fa fa-circle mr-1"></i>
                          {`${normalizeText(details.types[0])}`}
                        </h6>
                        <div className="content-block">
                          {`${details.formatted_address}, (${normalizeText(details.geometry.location_type)})`}
                        </div>
                      </div>
                    )
                  })
                }

                <a className="float-right" href={`https://www.google.com/maps/dir/${loc.lat},${loc.long}/${oloc.lat},${oloc.long}`} target="_blank" rel="noopener noreferrer" >
                  <button className="btn btn-default d-block"> <i className="la la-directions" /> Get Directions</button>
                </a>
              </div>
            </div>
          </>
        ) : (
            <SegmentLoader adaptive={true} />
          )}

      </div>
    </>
  )
}

export default LocationDetails;
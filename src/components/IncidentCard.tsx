import React from 'react'

const IncidentCard = (props) => {
  return (
    <div className="info-card incident-card shadow1 fade-in"
      onClick={() => {
        localStorage.currentLocation = JSON.stringify(props.data.location)
        document.getElementById('mapJump').click()
      }}
    >
      <div className="reportee">
        <i className="la la-exclamation-circle text-danger la-2x" />
        <span><strong>Incident Report</strong></span>
      </div>
      <small className="">
        {props.data.details}
      </small>
    </div>
  )
}

export default IncidentCard;
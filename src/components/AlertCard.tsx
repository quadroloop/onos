import React from 'react'

const AlertCard = () => {
  return (
    <div className="info-card hazard-card fade-in">
      <div className="hazard-row">

        <div className="hazard-icon">
          <i className="la la-exclamation-circle" />
        </div>


        <div className="hazard-details">
          <span className="type">Typhoon</span>
          <span className="hazard-name">VONGFONG</span>
          <small className="text-muted">Archived Data</small>
          <small className="badge">Learn More</small>
        </div>

      </div>
    </div>
  )
}

export default AlertCard;
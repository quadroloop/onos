import React from 'react'

const AreaCard = () => {
  return (
    <div className="info-card hazard-card area-card">
      <div className="hazard-row">

        <div className="hazard-icon">
          <i className="la la-home" />
        </div>

        <div className="hazard-details">
          <span className="type">SCHOOL</span>
          <p className="hazard-name">
            Rivera Village Elementary asdasdklasdkasd
          </p>
          <small className="text-muted">1km Away</small>
        </div>

      </div>
    </div>
  )
}

export default AreaCard;
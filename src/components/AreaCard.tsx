import React from 'react'

const AreaCard = (props) => {
  return (
    <div className={`info-card hazard-card area-card fade-in`}>
      <div className="hazard-row">

        <div className="hazard-icon">
          <i className="la la-home" />
        </div>

        <div className="hazard-details">
          <span className="type">{props.data.types[0].split("_").join(" ")}</span>
          <span className="hazard-name">
            {props.data.name}
          </span>
          {/* <small className="text-muted">1km Away</small> */}
        </div>


      </div>
    </div>
  )
}

export default AreaCard;
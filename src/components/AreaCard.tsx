import React from 'react'

const AreaCard = (props) => {
  const loc = JSON.parse(localStorage.originLocation)
  const oloc = JSON.parse(localStorage.currentLocation)
  return (
    <>
      <a id={`evac-${props.index}`} href={`https://www.google.com/maps/dir/${loc.lat},${loc.long}/${oloc.lat},${oloc.long}`} className="d-none" target="_blank" />
      <div className={`info-card hazard-card area-card fade-in`}
        onClick={() => {
          document.getElementById(`evac-${props.index}`).click()

        }
        }
      >
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
    </>
  )
}

export default AreaCard;
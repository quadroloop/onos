import React from 'react'

const IncidentCard = (props) => {
  return (
    <div className="incident-card shadow1">
      <div className="reportee">
        <img src="https://www.biography.com/.image/t_share/MTY2Njc5MTIyNzY2OTk2NTM1/nikola_tesla_napoleon-sarony-public-domain-via-wikimedia-commons.jpg" alt="reportee-image" />
        <span><strong>Aletheia Grace Del Rosario</strong></span>
      </div>
      <small className="px-2">
        <i className="la la-exclamation-circle text-danger mr-1" />
        Please Halp!
      </small>
    </div>
  )
}

export default IncidentCard;
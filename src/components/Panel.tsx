import React, { useState } from 'react'
import WeatherFeed from './WeatherFeed';



const Panel = (props) => {


  const [isWide, setWide] = useState(false)

  const togglePanel = () => {
    setWide(!isWide)
  }

  return (
    <div className={`panel-container wide-${isWide}`}>

      <div className="panel-header">
        <span><i className="la la-layer-group mr-1" style={{ fontSize: '25px', bottom: '-3px', position: 'relative' }} /> Dashboard</span>

        <div className="panel-nav-items">
          <span className="active x-item">Weather Info</span>
          <span className="x-item">Evacuation Areas</span>
          <span onClick={togglePanel} className="mr-0 pr-0">
            <i className={`la la-${isWide ? "chevron-circle-down" : "chevron-circle-up"}`} />
          </span>
        </div>
      </div >

      <WeatherFeed />

    </div >
  )
}

export default Panel;
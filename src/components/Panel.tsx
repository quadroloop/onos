import React, { useState } from 'react'
import WeatherFeed from './WeatherFeed';
import EvacuationAreas from './EvacuationAreas';
import Details from './Details';
import Reports from './Reports';



const Panel = (props) => {


  const [isWide, setWide] = useState(false)
  const [tab, setTab] = useState("weather")


  const togglePanel = () => {
    setWide(!isWide)
  }

  return (
    <div className={`panel-container wide-${isWide}`}>

      <div className="panel-header">
        <span><i className="la la-layer-group mr-1" style={{ fontSize: '25px', bottom: '-3px', position: 'relative' }} /> Dashboard</span>

        <div className="panel-nav-items">
          <span className={`x-item ${tab === "weather" ? "active" : ""}`} onClick={() => { setTab('weather') }}> <i className="la la-wind mr-1" /> <strong>Weather Info</strong></span>
          <span className={`x-item ${tab === "evacuation" ? "active" : ""}`} onClick={() => { setTab('evacuation') }}><i className="la la-home mr-1" />
            <strong>
              Evacuation Areas
          </strong>
          </span>
          <span className={`x-item ${tab === "reports" ? "active" : ""}`} onClick={() => { setTab('reports') }}><i className="la la-bolt mr-1" />
            <strong>
              Incidents
          </strong>
          </span>
          <span onClick={togglePanel} className="mr-0 pr-0">
            <i className={`expand la la-${isWide ? "chevron-circle-down" : "chevron-circle-up"}`} />
          </span>
        </div>
      </div >

      <div className="panel-body">



        {tab === "weather" && (
          <WeatherFeed />
        )}

        {tab === "evacuation" && (
          <EvacuationAreas />
        )}

        {tab === "reports" && (
          <Reports />
        )}

        {isWide && (
          <Details {...props} />
        )}



      </div>

    </div >
  )
}

export default Panel;
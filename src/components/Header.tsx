import React, { useState } from 'react'
import logo from '../assets/onos_mast.svg'

const Header = (props) => {

  const [layers, setLayers] = useState([])

  const filterSelect = (layer) => {

    if (layers.includes(layer)) {
      let newLayers = layers.filter(item => item !== layer)
      setLayers(newLayers)
    }

    if (!layers.includes(layer)) {
      let newLayers = layers.concat([layer])
      setLayers(newLayers)
    }

    if (layer === "covid") {
      if (document.contains(document.getElementById('showCovid'))) {
        document.getElementById('showCovid').click()
      }
    }

    if (layer === "satellite") {
      if (layers.includes(layer)) {
        document.getElementById('weather-map').style.display = 'none'
      } else {
        document.getElementById('weather-map').style.display = 'flex'
      }
    }


  }

  return (
    <div className="header">
      <div className="nav-logo ml-2">
        <img src={logo} alt="onos-logo" />
        <h3>ONOS</h3>
      </div>

      <div className="nav-group">
        <span
          onClick={() => { filterSelect('satellite') }}
          className={layers.includes('satellite') ? "active" : ""}><i className="la la-satellite mr-2" />
          <strong>Satellite Weather Layer</strong>
        </span>

        <span
          onClick={() => { filterSelect('covid') }}
          className={layers.includes('covid') ? "active" : ""}><i className="la la-comment-medical mr-2" />
          <strong>
            COVID-19 Info Layer
        </strong>
        </span>
      </div>
    </div>
  )
}

export default Header;
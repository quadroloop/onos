import React from 'react'
import { MapInteractionCSS } from 'react-map-interaction';


const WeatherMap = (props) => {
  return (
    <div className={`weather-map ${props.layers.length > 1 ? "overlay-map" : ""}`}>

      <div className="sat-gif-container">
        <MapInteractionCSS
          maxScale={100}
        >
          <img src="http://src.meteopilipinas.gov.ph/repo/mtsat-colored/24hour/latest-him-colored.gif" id="himawari-weather" alt="himawari-data" />
          {/* <img src="https://tnimage.s3.hicloud.net.tw/photos/2020/05/14/1589422949-5ebcab6564f6a.gif" alt="test-set" /> */}
        </MapInteractionCSS>
      </div>
    </div>
  )
}

export default WeatherMap;
import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import axios from 'axios'
import AlertCard from './AlertCard';


const GradientSVG = (props) => {
  let gradientTransform = `rotate(${20})`;

  return (
    <svg style={{ height: 0, position: "absolute" }}>
      <defs>
        <linearGradient id={props.idCSS} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor={props.endColor} />
          <stop offset="100%" stopColor={props.startColor} />
        </linearGradient>
      </defs>
    </svg>
  );
}




const RainWidget = data => {
  return (
    <div className="info-card shadow1">
      <div className="info-header">
        <small>{data.city}</small>
      </div>
      <div style={{ width: 80, height: 80, margin: "auto" }}>
        <CircularProgressbar
          value={data.percent}
          text={`${data.percent}%`}
        />
        <GradientSVG
          startColor="#56CCF2"
          endColor="#2272f3"
          idCSS="xPath"
        />
      </div>
      <div className="d-flex justify-content-center pt-1">
        <small>
          Chance of rain
       </small>
      </div>
    </div>
  )
}



const WeatherFeed = (props) => {


  const [weatherData, setWeather] = useState(null);

  const fetchForeCast = () => {
    setWeather(null)
  }

  useEffect(() => {
    fetchForeCast()
  })

  return (
    <div className="card-thread draggable">
      <AlertCard />
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5].map(x => {
          return (
            <RainWidget city="MAKATI" percent={78} />
          )
        })
      }
    </div>
  )
}

export default WeatherFeed;

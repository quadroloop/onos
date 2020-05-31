import React, { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import axios from 'axios'
import AlertCard from './AlertCard';
import { API_URL } from './Utilities';
import SegmentLoader from './SegmentLoader';


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




const RainWidget = item => {
  return (
    <div className="info-card shadow1 fade-in" onClick={() => { alert('yes') }}>
      <div className="info-header">
        <small>{item.data.location}</small>
      </div>
      <div style={{ width: 80, height: 80, margin: "auto" }}>
        <CircularProgressbar
          value={item.data.data[0].percent_chance_of_rain}
          text={`${item.data.data[0].percent_chance_of_rain}%`}
        />
        <GradientSVG
          startColor="#56CCF2"
          endColor="#2272f3"
          idCSS="xPath"
        />
      </div>
      <div className="d-flex justify-content-center pt-1">
        <small>
          {item.data.data[0].chance_of_rain}
        </small>
      </div>
    </div>
  )
}





const WeatherFeed = (props) => {


  const [weatherData, setWeather] = useState(null);

  const fetchForeCast = () => {
    setWeather(null)
    axios.get(`${API_URL}/forecasts`)
      .then(res => {
        setWeather(res.data[0].data)
        // console.log(res.data[0].data)
      })
  }

  useEffect(() => {
    fetchForeCast()
  }, [])

  return (
    <div className="card-thread draggable">
      <AlertCard />
      {
        weatherData ? (
          weatherData.map((x, index) => {
            if (x.data.length !== 0) {
              return (
                <RainWidget data={x} />
              )
            }
          })
        ) : (
            <SegmentLoader />
          )
      }
    </div>
  )
}

export default WeatherFeed;

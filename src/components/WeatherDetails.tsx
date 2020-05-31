import React, {useEffect, useState} from 'react'
import SegmentLoader from './SegmentLoader';
import axios from 'axios'

const APIURL = 'https://whitecloaktechnologiesinc_andoy:7OUNHoaquR3t2@api.meteomatics.com/'
const location = JSON.parse(localStorage.currentLocation);
console.log(location)


const WeatherDetails = () => {
  const [isRain, setIsRain] = useState(false)
  const [temp, setTemp] = useState("")
  const [humid, setHumid] = useState("")
  const [wind, setWind] = useState("")
  const [thunderWarning, setThunderWarning] = useState("No Thunderstorms")
  const [heavyWarning, setHeavyWarning] = useState("No Severe Rainfall")

  useEffect(()=> {
    fetchIsRain()
    // fetchTemp()
    // fetchHumid()
    // fetchWind()
    // fetchThunderWarning()
    // fetchHeavyWarning()
  },[])

  const fetchIsRain = async () => {
    axios.get(`${APIURL}is_rain_1h:idx/${location.lat},${location.long}/json`)
    .then(res => {
      const data = res.data;
      if (data.data[0].coordinates[0].dates.value === 1) {
        setIsRain(true)
      } else {
        setIsRain(false)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
 
  return (
    <div className="card shadow1 border-none mb-3">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0"> <i className="la la-wind" /> Weather Information</h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div>
        {isRain ? (   
       <div className="content-block-rain-warning">
           <span><i className="la la-exclamation-circle" /> There is rain in this area, bring your umbrella</span>
       </div>
        ) : (
        <div className="content-block">
          <span><i className="la la-check-circle" /> There is no rain in this area</span>
        </div>
        )
        }
        <div className="weather-info-container">
          <div className="info-left">
            <div className="weather-info-card temp">
              <span><i className="la la-temperature-high" /> Temperature: 36 °C</span>
            </div>
            <div className="weather-info-card humid">
              <span><i className="la la-cloud-rain" /> Humidity: 36 %</span>
            </div>
            <div className="weather-info-card wind">
              <span><i className="la la-wind" /> Wind: 36 k/mh</span>
            </div>
          </div>
          <div className="info-right">
            <div className="weather-info-card thunder-warning">
              <span><i className="la la-bolt" /> Thunderstorm Warning: {thunderWarning}</span>
            </div>
            <div className="weather-info-card heavy-warning">
              <span><i className="la la-cloud-showers-heavy" /> Heavy Rain Warning: {heavyWarning}</span>
            </div>
          </div>
        </div>     
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails;
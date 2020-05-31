import React, {useEffect, useState} from 'react'
import SegmentLoader from './SegmentLoader';
import axios from 'axios'

// const APIURL = 'https://whitecloaktechnologiesinc_andoy:7OUNHoaquR3t2@api.meteomatics.com/'
const location = JSON.parse(localStorage.currentLocation);

const WeatherDetails = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")


  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async () => {
    setLoading(false)
    axios.get(`https://api.aerisapi.com/forecasts/${location.lat},${location.long}?client_id=SXVBIrgMRkQh9VDBKLscu&client_secret=JA8ICLfhS4LXONuHNAyInYze0UzUNxjbl8xjEHkb`)
    .then(res => {
      const data = res.data.response[0].periods[0];
      var sunsetData = new Date(data.sunsetISO).toLocaleTimeString('en',{ hour12: true, timeZone: 'Asia/Manila' })
      var sunriseData = new Date(data.sunriseISO).toLocaleTimeString('en',{ hour12: true, timeZone: 'Asia/Manila' })
      setSunset(sunsetData)
      setSunrise(sunriseData)
      setData(data)
      setLoading(true)
    })
    .catch(error => {
      console.log(error)
      setLoading(true)
      setIsError(true);
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
      {loading ? (
      <div className="card-body">
        <div>
        { data && 
        <div className="content-block-rain-warning">
          <span><i className="la la-cloud-sun" /> The weather in this place is: {data.weather}</span>
        </div>
        }
        <div className="weather-info-container">
          <div className="info-left">
            {data &&
            <div className="weather-info-card temp">
              <span><i className="la la-temperature-high" /> Temperature: {data.avgTempC}°C / {data.avgTempF}°F</span>
            </div>
            }
            {data &&
            <div className="weather-info-card humid">
              <span><i className="la la-cloud-rain" /> Humidity: {data.humidity}%</span>
            </div>
            }
            {data &&
            <div className="weather-info-card wind">
              <span><i className="la la-wind" /> Wind Speeds: {data.windSpeedKPH}k/mh</span>
            </div>
            }
          </div>
          <div className="info-right">
            {data &&
            <div className="weather-info-card thunder-warning">
              <span><i className="la la-sun" /> Sunrise: {sunrise}</span> <br/>
              <span><i className="la la-cloud-showers-heavy" /> Sunset: {sunset}</span>
            </div>
            }
          </div>
        </div>     
        </div>
      </div>
      ) : (
        <SegmentLoader/>
      ) }
    </div>
  )
}

export default WeatherDetails;
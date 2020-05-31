import React, {useEffect, useState} from 'react'
import SegmentLoader from './SegmentLoader';
import Fuse from 'fuse.js'

const CovidDetails = (props) => {
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true)

  const covidData = props.covidData; 
  const address = props.location[6].formatted_address

  console.log(address)

  useEffect(() => {
    getCovid()
  },[])

  const getCovid = () => {
    setLoading(true)
    const options = {
      keys: ['city_mun', 'province', 'region']
    };
    if (props) {
      const fuse = new Fuse(covidData, options);
      const data = fuse.search(address)
      if (data) {
        setResult(data)
        setLoading(false)
      }
    }
  }

  return (
    <div className="card shadow1 border-none mb-3">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="mb-0"> <i className="la la-comment-medical text-danger" /> COVID-19 Information</h3>
          </div>
        </div>
      </div>
      {loading ? <SegmentLoader/> : 
      <div className="card-body">
      <div>
        <div className="content-block covid-info">
          {result && 
          <h3 style={{padding:"20px"}}>Total COVID-19 Cases in this area: <span style={{color:"red"}}>{result.length} Cases</span></h3>
          }
          </div>
      </div>
    </div>
    }
    </div>
  )
}

export default CovidDetails;
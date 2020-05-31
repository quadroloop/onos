import React, { useState, useEffect } from 'react'
import IncidentCard from './IncidentCard';
import axios from 'axios'
import SegmentLoader from './SegmentLoader';
import { API_URL } from './Utilities';


const Reports = (props) => {

  const [incidents, setIncidents] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/incidents`)
      .then(res => {
        setIncidents(res.data)
      })
  }, [])

  return (
    <div className="card-thread draggable">

      {
        incidents ? (
          incidents.map((item, index) => {
            return (
              <IncidentCard data={item} key={index} />
            )
          })
        ) : (
            <SegmentLoader />
          )
      }
    </div>

  )
}

export default Reports;
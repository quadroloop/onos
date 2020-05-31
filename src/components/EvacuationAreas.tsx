import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AreaCard from './AreaCard';
import SegmentLoader from './SegmentLoader';
import { API_URL } from './Utilities';



const googleMapsAPIKEY = "AIzaSyD5kFZMwUIUDZ25nTtLx0_0G3x1d2GMiCY";


const EvacuationAreas = (props) => {

  const [areas, setAreas] = useState(null);

  const location = JSON.parse(localStorage.currentLocation);



  const fetchForeCast = () => {
    if (localStorage.currentLocation) {
      axios.get(`${API_URL}/places/nearby`, {
        params: {
          location: `${location.lat},${location.long}`,
          keywords: "hospital,school",
        }
      })
        .then(res => {
          setAreas(res.data.results)
        })
    }

  }

  useEffect(() => {
    fetchForeCast()
  }, [])

  return (
    <div className="card-thread draggable">
      {areas ? (
        <>
          {
            areas.map((item: any, index: any) => {
              return (
                <AreaCard
                  index={index}
                  data={item}
                />
              )
            })
          }
        </>
      ) : (
          <SegmentLoader />
        )
      }

    </div>
  )
}

export default EvacuationAreas;

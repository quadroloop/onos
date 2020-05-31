import React from 'react'

const SegmentLoader = (props) => {
  return (
    <div className="segment-loader" style={props.adaptive === true ? { width: "100%", minWidth: "unset" } : {}}>
      <div className="loader">
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default SegmentLoader;
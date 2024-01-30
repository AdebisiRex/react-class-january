import React from 'react'

const SpecialButton = (props) => {
  return (
    <button onClick={props.functionToRun} className={`${props.color} btn px-5 py-3 shadow rounded-pill`}>
        {props.name}
    </button>
  )
}

export default SpecialButton
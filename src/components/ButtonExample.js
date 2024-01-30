import React from 'react'

const ButtonExample = (props) => {
  return (
    <button className='btn btn-danger m-2 px-5 py-3'>
        {props.children}
    </button>
  )
}

export default ButtonExample;
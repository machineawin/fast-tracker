import React from 'react'

const Button = ({btnName, btnColour}) => {

const btnStyle = {
    backgroundColor: btnColour,
}

  return (
    <div>
        <button className='btn' style={btnStyle} >{btnName}</button>
    </div>
  )
}

export default Button
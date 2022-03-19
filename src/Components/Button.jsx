import React from 'react'
import PropTypes from 'prop-types'

const Button = ({btnName, btnColour, onClick}) => {

const btnStyle = {
    backgroundColor: btnColour,
}

  return (
  <button className='btn' style={btnStyle} onClick={onClick}>{btnName}</button>
  )
}

Button.defaultProps = {
    btnColour: 'steelblue',
    btnName: 'I\'m a button',
}

Button.propTypes = {
    btnColour: PropTypes.string,
    btnName: PropTypes.string,
}

export default Button
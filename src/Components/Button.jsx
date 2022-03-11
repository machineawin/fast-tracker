import React from 'react'
import PropTypes from 'prop-types'

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

Button.defaultProps = {
    btnColour: 'steelblue',
    btnName: 'I\'m a button',
}

Button.propTypes = {
    btnColour: PropTypes.string,
    btnName: PropTypes.string,
}

export default Button
import React from 'react';
import PropTypes from 'prop-types'
// if a link is provided then the button 
// will redirect to link otherwise onClick will be called 
const Button = ({ color, text, onClick, link}) => {
    return (
        <button 
        onClick={onClick}
        style={{backgroundColor: color}} 
        className='btn'>
            {text}
            </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
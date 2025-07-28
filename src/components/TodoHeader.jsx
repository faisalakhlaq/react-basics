import React from 'react';

import PropTypes from 'prop-types'
import Button from './Button'

const TodoHeader = ({ title, onAdd, showAdd }) => { 
    return (
        <header className='header'>
          <h1>{ title }</h1>
          <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close Form' : 'Add Task' }
          onClick={onAdd} />
        </header>
    )
}

TodoHeader.defaultProps = {
    title: 'Task Tracker'
}

TodoHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default TodoHeader
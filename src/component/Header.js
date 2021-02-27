import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'




const Header = ({title, onAdd, showAdd}) => {   
        
    
    return (
        <header className= 'header'>
            <h1>{title}</h1>
            <Buttons onClick = {onAdd}  text= {showAdd ? 'close' : 'Add'}
             color = 'rgb(239, 238, 238)' />
           
        </header>

    )
}
Header.defaultProps = {
    title : 'Task Manager',
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header

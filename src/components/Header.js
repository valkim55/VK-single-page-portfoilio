import PropTypes from 'prop-types'
import Navigation from './Navigation'

//import {useState, useEffect} from 'react'

const Header = ( {title} ) => {

    
        
  return (
    <header className='header'>
        <h1>
            <a href='/'>
                {title}
            </a>
        </h1>
       
       <Navigation /> 

        


    </header>
  )
}

Header.defaultProps = {
    title: "Val's React Portfolio"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
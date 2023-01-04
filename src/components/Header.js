import PropTypes from 'prop-types'
//import Navigation from './Navigation'

import {useState, useEffect} from 'react'

const Header = ( {title} ) => {

    const navSections = [
        { title: 'about me' },
        { title: 'portfolio' },
        { title: 'reach out' },
        { title: 'resume' }
    ]

    const [currSection, setCurrSection] = useState(navSections[0])

    // change the tab title in response to currently viewed section of the application
    useEffect(() => {
        document.title = currSection.title
    }, [currSection])
        
  return (
    <header className='header'>
        <h1>
            <a href='/'>
                {title}
            </a>
        </h1>
       
        <nav>
            <ul className='flex-row'>
                
                {navSections.map((section) => (
                    <li className={currSection.title === section.title && 'navActive'} key={section.title}> 
                        <span onClick={() => setCurrSection(section)}>{section.title}</span>
                    </li>
                ))}
                
            </ul>
            
        </nav>

        


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
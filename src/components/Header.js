import PropTypes from 'prop-types'
//import Navigation from './Navigation'

//import {useState} from 'react'

const Header = ( {title} ) => {

    const navSections = [
        { title: 'about me' },
        { title: 'portfolio' },
        { title: 'reach out' },
        { title: 'resume' }
    ]

    function sectionSelected(title) {
        console.log(`currently viewing ${title}`)
    }
        
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
                    <li className='' key={section.title}> 
                        <span onClick={() => sectionSelected(section.title)}>{section.title}</span>
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
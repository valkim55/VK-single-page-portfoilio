import { NavLink } from 'react-router-dom'
//import { useState } from 'react'


const Navigation = () => {

    
    

    return (

        <nav>
        <ul className='flex-row'>
            
            <li className='' key='about'> 
                <NavLink to='/' >about me</NavLink>
            </li>

            <li className='' key='portfolio'> 
                <NavLink to='/projects'>portfolio</NavLink>
            </li>

            <li className='' key='contact'> 
                <NavLink to='/contact'>reach out</NavLink>
            </li>

            <li className='' key='resume'> 
                <NavLink to='/resume'>resume</NavLink>
            </li>

        </ul>
        
    </nav>
    )
}

export default Navigation
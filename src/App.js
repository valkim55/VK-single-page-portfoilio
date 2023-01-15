//import { useState, useEffect } from 'react'

// bring in the router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import profilePic from './assets/profilePic.jpg'


function App() {

    // const [projects, setProjects] = useState([])

    // useEffect( () => {
    //     const getProjects = async () => {
    //         const allProjects = await fetchProjects()
    //         setProjects(allProjects)
    //         //console.log('hi')
    //     };

    //     getProjects();

    // })

    // const fetchProjects = async () => {
    //     const res = await fetch('http://localhost:5001/projects')
    //     const data = await res.json()
    //     //console.log(data)
        
    //     return data
    // }

    

  return (
    <Router>
        <div className="App">
            <Header />
            
            <main>
                <Routes>
                    <Route path='/' element={
                    <>
                        <section id='about'>
                            <h1>about me</h1>
                            <p>lalala</p>
                            <img src={profilePic} className='my-2' style={{width: "30%"}} alt='myProfilePicture'></img>
                        </section>
                    </>
                    }/>

                    <Route path='/projects' element={
                        <Projects  />
                    } />
                        
                    <Route path='/contact' element={
                        <Contact />
                    } />
                                               
                    <Route path='/resume' element={
                        <Resume />
                    } />
                        

                </Routes>


                <Footer />
            </main>
        </div>
    </Router>
  );
}

export default App;

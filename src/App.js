import { useState, useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'
import profilePic from './assets/profilePic.jpg'


function App() {

    const [projects, setProjects] = useState([])

    useEffect( () => {
        const getProjects = async () => {
            const allProjects = await fetchProjects()
            setProjects(allProjects)
            //console.log('hi')
        };

        getProjects();

    })

    const fetchProjects = async () => {
        const res = await fetch('http://localhost:5001/projects')
        const data = await res.json()
        //console.log(data)
        
        return data
    }



  return (
    <div className="App">
        <Header />
        
        <main>
            <section id='about'>
                <h1>Bio</h1>
                <p>lalala</p>
                <img src={profilePic} className='my-2' style={{width: "30%"}} alt='myProfilePicture'></img>
            </section>

            <Project projects={projects} />

            <section id='contact'>
                <h1>reach out form</h1>
                <p>to reach out do this</p>
                
            </section>

            <section>
                <div>
                    <h4>tech stack</h4>
                    <ul>Backend
                        <li>...</li>
                    </ul>
                    <ul>Frontend
                        <li>...</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </main>
    </div>
  );
}

export default App;

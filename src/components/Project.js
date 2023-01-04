

// use props to reuse this component multiple times with different projects in App.js
// React.createElement(
    // "div", 
    // {props}, 
    // [
        // React.createElement(
            // "h2", 
            // {}, 
            // E-Commerce Backend
        // ), 
    
        // React.createElement(
            // "h4", 
            // {}, 
            // GitHub Repo
        // ), 
        
        // React.createElement(
            // "img", 
            // {}, 
            // GitHub Repo
        // )
    // ]
//)

const Project = ({projects}) => {

    

  return (

    <h1>projects placeholder</h1>
    // <>
    //     {projects.map( (project) => (
    //         <div key={project.id}>
    //             <h3>{project.title}</h3>
    //             <h4>{project.repo}</h4>
    //             <img src={project.scr} style={{width: "30%"}} alt='appScreenshot'></img>
    //         </div>
    //     ))}
    // </>
  )
}

export default Project
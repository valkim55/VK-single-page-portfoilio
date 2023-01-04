

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

    const {id, title, repo, scr} = projects;

  return (

    <h1>projects placeholder</h1>
    // <>
    //     {projects.map( (project) => (
    //         <div key={id}>
    //             <h3>{title}</h3>
    //             <h4>{repo}</h4>
    //             <img src={scr} style={{width: "30%"}} alt='appScreenshot'></img>
    //         </div>
    //     ))}
    // </>
  )
}

export default Project
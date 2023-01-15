import Github from './extra/Github'

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

const projects = [
    {
        "id": 1,
        "title": "E-Commerce Backend App",
        "repo": "https://github.com/valkim55/VK-ORM-e-commerce-store",
        "scr": "./src/assets/e-commerce-img.png"
    },
    {
        "id": 2,
        "title": "API for a Social Network",
        "repo": "https://github.com/valkim55/VK-social-network-API",
        "scr": "./src/assets/sn-api-img.png"
    },
    {
        "id": 3,
        "title": "RESTful API Tech Blog",
        "repo": "https://github.com/valkim55/VK-tech-blog",
        "scr": "./src/assets/tech-blog-img.png"
    },
    {
        "id": 4,
        "title": "CMS tracker for Node.js",
        "repo": "https://github.com/valkim55/VK-CMS-tracker",
        "scr": "./src/assets/cms-tracker-img.png"
    },
    {
        "id": 5,
        "title": "Digital Planner React App",
        "repo": "https://github.com/valkim55/VK-react-task-tracker",
        "scr": "./src/assets/react-planner-img.png"
    },
    {
        "id": 6,
        "title": "PWA Contact Book",
        "repo": "https://github.com/valkim55/VK-contact-card",
        "scr": "./src/assets/pwa-img.png"
    }
    
]

const Project = () => {

    
    

  return (
    <div>
        
        <Github />
        {projects.map( ( {id, title, repo, scr} ) => (
            <div key={id}>
                <h3>{title}</h3>
                <h4>{repo}</h4>
                <img src={scr} style={{width: "30%"}} alt='appScreenshot'></img>
           </div>
       ))} 
    
    </div>
  )
}

export default Project
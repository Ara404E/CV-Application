import { useState } from "react";

const Project = ({project , setProject}) => {
    const [isOpen , setOpen] = useState()

    const addMore = () => {
            setProject((prev) => 
            [...prev , {id:crypto.randomUUID(), name:'' , 
                techStack:'' , repoURL: '' , repo: '' , demoURL: '' , demo: '' }]
            )}

    
    const remove = (id) =>{
        setProject((prev) => prev.filter(edu => edu.id != id))
    }

    
    const handleInputChange = (id ,field, value) => {
        setProject((prev) => 
            prev.map((proj) => 
                proj.id === id ? {...proj , [field]: value } : proj 
            )
        )
    }

    return(
        <div className="dropdown-container">
            <button onClick={() => (setOpen(!isOpen))} className="dropdown-btn"> {isOpen ? "▲" : "▼ Projects" }  </button>
            <div className={`dropdown-content ${isOpen ? "show" : "" } `}>

                {project.map(({id,name,techStack,repoURL,repo, demoURL , demo}) => (
                        <div key={id}> 
                            <input
                            type="text"
                            value={name}
                            placeholder="Project Name"
                            onChange={(e) => handleInputChange(id ,"name", e.target.value)}
                            />
                               <input
                            type="text"
                            value={techStack}
                            placeholder="HTML, CSS, React, JavaScript, Redux, Bootstrap, Express.js, PostgreSQL"
                            onChange={(e) => handleInputChange(id ,"techStack", e.target.value)}
                            />
                               <input
                            type="text"
                            value={repoURL}
                            placeholder="https://www.github.com/johndoe/WeatherApp"
                            onChange={(e) => handleInputChange(id ,"repoURL", e.target.value)}
                            />
                               <input
                            type="text"
                            value={repo}
                            placeholder="github repo(Text)"
                            onChange={(e) => handleInputChange(id ,"repo", e.target.value)}
                            />
                             <input
                            type="text"
                            value={demoURL}
                            placeholder="https://john-doe-weather-app.com"
                            onChange={(e) => handleInputChange(id ,"demoURL", e.target.value)}
                            />
                             <input
                            type="text"
                            value={demo}
                            placeholder="Live Preview/Website(Text)"
                            onChange={(e) => handleInputChange(id ,"demo", e.target.value)}
                            />
                            <button onClick={() => remove(id)} className="remove-btn" > remove </button>
                        </div>
                ))
            }
            <button onClick={addMore} className="add-btn"> Add Project  </button>
            </div>  
        </div>
    )

}

export default Project;
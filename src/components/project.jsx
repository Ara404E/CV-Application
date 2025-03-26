import { useState, useEffect } from "react";
import "../styles/project.css";

const Project = ({ project, setProject }) => {
    const [isOpen, setOpen] = useState(false);

    const addMore = () => {
        setProject((prev) => 
            [...prev, {
                id: crypto.randomUUID(), 
                name: '', 
                techStack: '', 
                repoURL: '', 
                repo: '', 
                demoURL: '', 
                demo: ''
            }]
        )
    }

    const remove = (id) => {
        setProject((prev) => prev.filter(edu => edu.id !== id))
    }

    const handleInputChange = (id, field, value) => {
        setProject((prev) => 
            prev.map((proj) => 
                proj.id === id ? {...proj, [field]: value } : proj 
            )
        )
    }

    return (
        <>
            <div className="layout-div">
                <div className="layout-btn-div">
                    <button onClick={() => setOpen(!isOpen)} className="layout-btn">
                        {isOpen ? '▼' : '▶'} Projects
                    </button>
                </div>
            </div>

            <div className={`form-container ${isOpen ? "show" : ""}`}>
                <div className="form-scrollable">
                    {project.map(({id, name, techStack, repoURL, repo, demoURL, demo}) => (
                        <div key={id} className="project-container">
                            <div className="animated-border"></div>
                            <div className="project-content">
                                <h3 className="project-title">Project {project.indexOf(id) + 1}</h3>
                                
                                <div className="project-table">
                                    <div className="table-row">
                                        <div className="table-header">Name</div>
                                        <div className="table-data">
                                            <input
                                                type="text"
                                                value={name}
                                                placeholder="TravelPlanner"
                                                onChange={(e) => handleInputChange(id, "name", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-header">Tech Stack</div>
                                        <div className="table-data">
                                            <input
                                                type="text"
                                                value={techStack}
                                                placeholder="HTML, CSS, React, TypeScript, Redux, Bootstrap, Express.js, PostgreSQL"
                                                onChange={(e) => handleInputChange(id, "techStack", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="project-links">
                                    <div className="link-group">
                                        <label>Code:</label>
                                        <input
                                            type="text"
                                            value={repoURL}
                                            placeholder="https://www.github.com/johndoe/TravelPlanner"
                                            onChange={(e) => handleInputChange(id, "repoURL", e.target.value)}
                                        />
                                    </div>
                                    <div className="link-group">
                                        <label>Demo:</label>
                                        <input
                                            type="text"
                                            value={demoURL}
                                            placeholder="https://john-doe-travel-planner.herokuapp.com"
                                            onChange={(e) => handleInputChange(id, "demoURL", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <button onClick={() => remove(id)} className="remove-btn">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <button onClick={addMore} className="add-btn">
                        Add Project
                    </button>
                </div>
            </div>
        </>
    )
}

export default Project;
// Project.jsx
import "../styles/project.css";

const Project = ({ project, setProject }) => {
    const addProject = () => {
        setProject((prev) => 
            [...prev, {
                id: crypto.randomUUID(), 
                name: '', 
                techStack: '', 
                bulletPoints: [''],
                codeURL: '',
                codeText: '',
                demoURL: '',
                demoText: ''
            }]
        )
    }

    const addBulletPoint = (projectId) => {
        setProject((prev) => 
            prev.map((project) =>
                project.id === projectId 
                    ? { ...project, bulletPoints: [...project.bulletPoints, ''] } 
                    : project
            )
        )
    }

    const removeProject = (id) => {
        setProject((prev) => prev.filter(proj => proj.id !== id))
    }

    const removeBulletPoint = (projectId, index) => {
        setProject((prev) => 
            prev.map((project) =>
                project.id === projectId 
                    ? { 
                        ...project, 
                        bulletPoints: project.bulletPoints.filter((_, i) => i !== index) 
                      } 
                    : project
            )
        )
    }

    const handleInputChange = (id, field, value) => {
        setProject((prev) => 
            prev.map((proj) => 
                proj.id === id ? {...proj, [field]: value } : proj 
            )
        )
    }

    return (
    <div className="project-container">
        <div className="project-form">
            <div className="project-form-scrollable">
                {project.map(({ id, name, techStack, bulletPoints, repoURL, repoText, demoURL, demoText }) => (
                    <div key={id} className="project-input-container">
                        <h3>Project {project.findIndex(p => p.id === id) + 1}</h3>
                        <div className="project-top-form-row">
                            <div className="form-top-section">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="TravelPlanner"
                                    onChange={(e) => handleInputChange(id, "name", e.target.value)}
                                    />
                            </div>
                            
                            <div className="form-top-section">
                                <label>Tech Stack</label>
                                <input
                                    type="text"
                                    value={techStack}
                                    placeholder="HTML, CSS, React, TypeScript, Redux, Bootstrap, Express.js, PostgreSQL"
                                    onChange={(e) => handleInputChange(id, "techStack", e.target.value)}
                                    />
                            </div>
                        </div>

                        {/* Bullet Points Section */}
                        <div className="bullet-point-section">
                            <label>Bullet Points</label>
                            {bulletPoints.map((point, index) => (
                                <div key={index} className="bullet-point-row">
                                    <input
                                        type="text"
                                        value={point}
                                        onChange={(e) => {
                                            const newBullets = [...bulletPoints];
                                            newBullets[index] = e.target.value;
                                            handleInputChange(id, "bulletPoints", newBullets);
                                        }}
                                        placeholder="Developed a user-friendly web application for travel planning..."
                                        />
                                    <button
                                        className="remove-bullet-btn"
                                        onClick={() => removeBulletPoint(id, index)}
                                        >
                                        -
                                    </button>
                                </div>
                            ))}
                            <button
                                className="add-bullet-btn"
                                onClick={() => addBulletPoint(id)}
                                >
                                +
                            </button>
                        </div>

                        <div className="project-bottom-form-row">
                            <div className="form-group">
                                <label>Repo</label>
                                <input
                                    type="url"
                                    value={repoURL}
                                    placeholder="https://www.github.com/johndoe/TravelPlanner"
                                    onChange={(e) => handleInputChange(id, "repoURL", e.target.value)}
                                    />
                                <input
                                    type="text"
                                    value={repoText}
                                    placeholder="Github Repo(Text)"
                                    onChange={(e) => handleInputChange(id, "repo", e.target.value)}
                                    />
                            </div>
                        </div>

                        <div className="project-bottom-form-row">
                            <div className="form-group">
                                <label>Demo</label>
                                <input
                                    type="url"
                                    value={demoURL}
                                    placeholder="https://john-doe-travel-planner.herokuapp.com"
                                    onChange={(e) => handleInputChange(id, "demoURL", e.target.value)}
                                    />
                                <input
                                    type="text"
                                    value={demoText}
                                    placeholder="Live Preview/Website(Text)"
                                    onChange={(e) => handleInputChange(id, "demoText", e.target.value)}
                                    />
                            </div>
                        </div>

                        <button 
                            onClick={() => removeProject(id)} 
                            className="remove-btn"
                            >
                            Remove Project
                        </button>
                    </div>
                ))}

                <button onClick={addProject} className="add-btn">
                    Add Project
                </button>
            </div>
        </div>
    </div>
    )
}

export default Project;
import "../styles/education.css";

const Education = ({ education, setEducation }) => {

    const addEducation = () => {
        setEducation((prev) => 
            [...prev, { 
                id: crypto.randomUUID(), 
                university: '', 
                degree: '',
                graduation: '', 
                address: '',
                extra: [{ project: "" }]
            }]
        )
    }

    const addProject = (eduId) => {
        setEducation((prev)=> 
            prev.map((edu)=>
                edu.id === eduId ? {...edu, extra: [...edu.extra, { project: "" }]} : edu
            )
        )
    }

    const handleInputChange = (id, field, value) => {
        setEducation((prev) => 
            prev.map((edu) =>
                edu.id === id ? {...edu, [field]: value } : edu
            ) 
        )
    }

    const handleProjectChange = (eduId, projectIndex, value) => {
        setEducation((prev) => 
            prev.map((edu)=> 
                edu.id === eduId ? {...edu, extra: edu.extra.map((project, index) =>
                    index === projectIndex ? {...project, project: value} : project
                )} : edu
            )
        )
    }

    const removeProject = (eduId, projectIndex) => {
        setEducation((prev) => 
            prev.map((edu)=> 
                edu.id === eduId ? {...edu, extra: edu.extra.filter((_, index) => index !== projectIndex)} : edu
            )        
        )
    }

    const removeEducation = (id) => {
        setEducation((prev)=> prev.filter((edu) => edu.id !== id))
    }

    return (
        <div className="education-form-container">
                <div className="education-form-scrollable">
                    {education.map(({id, university, degree, graduation, address, extra}, index) => (
                        <div key={id} className="education-entry">
                            <h3 className="education-title">Degree {index + 1}</h3>
                            
                            <div className="education-section">
                                <h4 className="section-title">University Name</h4>
                                <input
                                    type="text"
                                    value={university}
                                    placeholder="Pistaschio Institute of Technology"
                                    onChange={(e) => handleInputChange(id, "university", e.target.value)}
                                    className="education-input"
                                    />
                            </div>

                            <div className="education-section">
                                <h4 className="section-title">Graduation</h4>
                                <input
                                    type="text"
                                    value={graduation || ""}
                                    placeholder="August 2013"
                                    onChange={(e) => handleInputChange(id, "graduation", e.target.value)}
                                    className="education-input"
                                    />
                            </div>

                            <div className="education-section">
                                <h4 className="section-title">Degree</h4>
                                <input
                                    type="text"
                                    value={degree}
                                    placeholder="MS, Computer Science"
                                    onChange={(e) => handleInputChange(id, "degree", e.target.value)}
                                    className="education-input"
                                    />
                            </div>

                            <div className="education-section">
                                <h4 className="section-title">Address</h4>
                                <input
                                    type="text"
                                    value={address}
                                    placeholder="Goodwell, Motherland"
                                    onChange={(e) => handleInputChange(id, "address", e.target.value)}
                                    className="education-input"
                                    />
                            </div>

                            <div className="bullet-points-section">
                                <h4 className="section-title">Bullet Points</h4>
                                <p className="hint-text">List your honors like summa cum laude or Economics Honors Society; 3.X/4.0</p>
                                
                                {extra.map((proj, idx) => (
                                    <div key={idx} className="bullet-point-group">
                                        <input
                                            type="text"
                                            value={proj.project}
                                            placeholder="List your honors and achievements"
                                            onChange={(e) => handleProjectChange(id, idx, e.target.value)}
                                            className="bullet-point-input"
                                            />
                                        <button 
                                            onClick={() => removeProject(id, idx)}
                                            className="remove-btn"
                                            >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                
                                <button 
                                    onClick={() => addProject(id)} 
                                    className="add-project-btn"
                                    >
                                    Add Bullet Point
                                </button>
                            </div>

                            <button 
                                onClick={() => removeEducation(id)}
                                className="remove-education-btn"
                                >
                                Remove Education
                            </button>
                        </div>
                    ))}
                    <button onClick={addEducation} className="add-btn">
                        Add Education
                    </button>
                </div>     
            </div>
    )
}

export default Education;
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
        );
    };

    const addProject = (eduId) => {
        setEducation((prev)=> 
            prev.map((edu)=>
                edu.id === eduId ? {...edu, extra: [...edu.extra, { project: "" }]} : edu
            )
        );
    };

    const handleInputChange = (id, field, value) => {
        setEducation((prev) => 
            prev.map((edu) =>
                edu.id === id ? {...edu, [field]: value } : edu
            ) 
        );
    };

    const handleProjectChange = (eduId, projectIndex, value) => {
        setEducation((prev) => 
            prev.map((edu)=> 
                edu.id === eduId ? {...edu, extra: edu.extra.map((project, index) =>
                    index === projectIndex ? {...project, project: value} : project
                )} : edu
            )
        );
    };

    const removeProject = (eduId, projectIndex) => {
        setEducation((prev) => 
            prev.map((edu)=> 
                edu.id === eduId ? {...edu, extra: edu.extra.filter((_, index) => index !== projectIndex)} : edu
            )        
        );
    };

    const removeEducation = (id) => {
        setEducation((prev)=> prev.filter((edu) => edu.id !== id));
    };

    return (
    <div className="education-container">
        <div className="education-form">
            <div className="education-form-scrollable">
                {education.map(({id, university, degree, graduation, address, extra}, index) => (
                    <div key={id} className="education-input-container">
                        <h3 className="education-title">Degree {index + 1}</h3> 
                        <div className="education-row">
                            <div className="education-section">
                                <h4 className="section-title">University Name</h4>
                                <input
                                    type="text"
                                    value={university}
                                    placeholder="XYZ University"
                                    onChange={(e) => handleInputChange(id, "university", e.target.value)}
                                    className="education-input"
                                    />
                            </div>
                             
                        <div className="education-section">
                            <h4 className="section-title">Degree</h4>
                            <input
                                type="text"
                                value={degree}
                                placeholder="Bachelor of Science in Computer Science"
                                onChange={(e) => handleInputChange(id, "degree", e.target.value)}
                                className="education-input"
                                />
                        </div>
                    </div>
 
                    <div className="education-row">
                        <div className="education-section">
                                <h4 className="section-title">Graduation</h4>
                                <input
                                    type="text"
                                    value={graduation || ""}
                                    placeholder="Graduation Month, Year"
                                    onChange={(e) => handleInputChange(id, "graduation", e.target.value)}
                                    className="education-input"
                                    />
                            </div>
                        <div className="education-section">
                            <h4 className="section-title">Address</h4>
                            <input
                                type="text"
                                value={address}
                                placeholder="City, State / City, Country"
                                onChange={(e) => handleInputChange(id, "address", e.target.value)}
                                className="education-input"
                                />
                        </div>
                        </div>
                        <div className="bullet-points-section">
                            <h4 className="section-title">Bullet Points</h4>                                
                            {extra.map((proj, idx) => (
                                <div key={idx} className="bullet-point-group">
                                    <input
                                        type="text"
                                        value={proj.project}
                                        placeholder="List your honors like summa cum laude or Economics Honors Society; 3.X/4.0"
                                        onChange={(e) => handleProjectChange(id, idx, e.target.value)}
                                        className="bullet-point-input"
                                        />
                                    <button 
                                        onClick={() => removeProject(id, idx)}
                                        className="remove-bullet-btn"
                                        >
                                        -
                                    </button>
                                </div>
                            ))}
                            
                            <button 
                                onClick={() => addProject(id)} 
                                className="add-bullet-btn"
                                >
                                +
                            </button>
                        </div>
                        <button 
                            onClick={() => removeEducation(id)}
                            className="remove-btn"
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
    </div>
    );
};

export default Education;
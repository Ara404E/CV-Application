import { useState } from "react";
import "../styles/workExperience.css";

const WorkExperience = ({ workExperience, setWorkExperince }) => {
    const [isOpen, setOpen] = useState(false);

    const addJob = () => {
        setWorkExperince(prev => 
            [...prev, {
                id: crypto.randomUUID(),company: "", position: "", duration: "", address: ""}]
        )
    }

    const remove = (id) => {
        setWorkExperince(prev => prev.filter(exper => exper.id !== id))
    }

    const handleInputChange = (id, field, value) => {
        setWorkExperince((prev) => 
            prev.map((job) => 
                job.id === id ? { ...job, [field]: value } : job 
            ) 
        )
    }

    return (
        <>
            <div className="layout-div">
                <div className="layout-btn-div">
                    <button className="layout-btn" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? '▼' : '▶'} Work Experience
                    </button>
                </div>
            </div>

            <div className={`form-container ${isOpen ? "show" : ""}`}>
                <div className="form-scrollable">
                    <div className="job-header">
                        <h4>{workExperience.length === 1 ? <span> Most recent first </span> : "" }</h4>
                      
                    </div>

                    {workExperience.map(({id, company, position, duration, address}) => (
                        <div key={id} className="job-input-container">
                            <div className="input-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    value={company}
                                    placeholder="Company name"
                                    onChange={(e) => handleInputChange(id, "company", e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Job Title</label>
                                <input
                                    type="text"
                                    value={position}
                                    placeholder="Job title"
                                    onChange={(e) => handleInputChange(id, "position", e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Duration</label>
                                <input
                                    type="text"
                                    value={duration}
                                    placeholder="2001"
                                    onChange={(e) => handleInputChange(id, "duration", e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label>Address (optional)</label>
                                <input
                                    type="text"
                                    value={address}
                                    placeholder="Address"
                                    onChange={(e) => handleInputChange(id, "address", e.target.value)}
                                />
                            </div>

                            <button className="remove-btn" onClick={() => remove(id)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <button className="add-btn" onClick={addJob}>
                        Add Work Experience
                    </button>
                </div>
            </div>
        </>
    )
}

export default WorkExperience;
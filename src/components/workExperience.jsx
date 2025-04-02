import { useState } from "react";
import "../styles/workExperience.css";

const WorkExperience = ({ workExperience, setWorkExperince }) => {

    const addJob = () => {
        setWorkExperince(prev => 
            [...prev, {
                id: crypto.randomUUID(),company: "", position: "",
                 duration: "", address: "" , extra:[{ specification: '' }]}]
        )
    }

    const addSpecification = (workId) => {
        setWorkExperince((prev) => 
            prev.map((work) => 
                work.id === workId ? {...work , extra: [...work.extra, {specification:''}]} : work
            )
        )
    }

    const remove = (id) => {
        setWorkExperince(prev => prev.filter(exper => exper.id !== id))
    }

    const removeSpecification = (workId,extraIndex) => {
        setWorkExperince((prev) => 
            prev.map((work) => 
                work.id === workId ? {...work,extra: work.extra.filter((_,index) => index != extraIndex)} : work
            )
        )
    }

    const handleInputChange = (id, field, value) => {
        setWorkExperince((prev) => 
            prev.map((job) => 
                job.id === id ? { ...job, [field]: value } : job 
            ) 
        )
    }

    const handleExtraInputChange = (workId , extraIndex , value) =>{
        setWorkExperince((prev) => 
            prev.map((work)=>
                work.id === workId ? {...work , extra: work.extra.map((specification,index)=>
                    index === extraIndex ? {...specification , specification : value} : specification 
                )} : work
            )
        )
    }


    return (
        <>
        <div className="work-form-container">
                <div className="form-scrollable">
                    <div className="job-header">
                    </div>
                    {workExperience.map(({id, company, position, duration, address, extra } , index) => (
                        <div key={id} className="job-input-container">
                                <h4> { index === 0 ? 
                                    <> <h4> Job {index + 1} </h4> <span> Most recent first </span> </>  
                                    : `Job ${index + 1 }`} </h4>        
                            <div className="input-row">
                                <div className="input-group" style={{flex: 2}}>
                                    <label>Company Name</label>
                                    <input
                                        type="text"
                                        value={company}
                                        placeholder="Company name"
                                        onChange={(e) => handleInputChange(id, "company", e.target.value)}
                                        />
                                </div>

                                <div className="input-group" style={{flex: 2}}>
                                    <label>Job Title</label>
                                    <input
                                        type="text"
                                        value={position}
                                        placeholder="Job title"
                                        onChange={(e) => handleInputChange(id, "position", e.target.value)}
                                        />
                                </div>
                            </div>

                            <div className="input-row">
                                <div className="input-group" style={{flex: 2}}>
                                    <label>Duration</label>
                                    <input
                                        type="text"
                                        value={duration}
                                        placeholder="Month Year - Month Year/Present"
                                        onChange={(e) => handleInputChange(id, "duration", e.target.value)}
                                        />
                                </div>

                                <div className="input-group" style={{flex: 2}}>
                                    <label>Address (optional)</label>
                                    <input
                                        type="text"
                                        value={address}
                                        placeholder="City, State / City, Country"
                                        onChange={(e) => handleInputChange(id, "address", e.target.value)}
                                        />
                                </div>
                            </div>
                            
                            <div className="bullet-points-section">
                                <label>Bullet Points</label>
                                {extra.map((specification, index) => (
                                    <div key={index} className="bullet-point-input">
                                        <input
                                            type="text"
                                            value={specification.specification}
                                            onChange={(e) => handleExtraInputChange(id, index, e.target.value)}
                                            placeholder="Add bullet point"
                                        />
                                        <button 
                                            className="remove-bullet-btn"
                                            onClick={() => removeSpecification(id, index)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button 
                                    className="add-bullet-btn"
                                    onClick={() => addSpecification(id)}
                                >
                                    Add more
                                </button>
                            </div>
                            
                            <button className="remove-work-btn" onClick={() => remove(id)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <button className="add-work-btn" onClick={addJob}>
                        Add Work Experience
                    </button>
                </div>
            </div>
        </>
    )
}

export default WorkExperience;
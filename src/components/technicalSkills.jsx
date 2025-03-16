import { createElement, useState } from "react";

const TechnicalSkills = ({technicalSkill , setTechnicalSkill}) => {
    const [ isOpen , setOpen ] = useState(false)
 
    const addSkill = (category) => {
        setTechnicalSkill((prevSkills) =>({
            ...prevSkills, 
            [category] : [...prevSkills[category] , {id: crypto.randomUUID() , skill: ''}]
    }));
    };


    const remove = (category,id) => {
            setTechnicalSkill((prev) => (
                {...prev,
                    [category] : prev[category].filter((skill) => skill.id !== id )
                }
            ) 
            )
    }


    const handleSkillChange = (category,id, value) => {
        setTechnicalSkill((prevSkills) => ({
                ...prevSkills,[category]: prevSkills[category].map(skill =>
                    skill.id === id ? {...skill , skill : value } : skill
                )
        }));
    };



    return (
        <div className="dropdown-container">
                <button className="dropdown-btn" onClick={() => setOpen(!isOpen)}>
                {isOpen ? "▲" : "▼ Skills "}   
                </button>
                    <div className={`dropdown-content ${isOpen ? "show" : "" }`}>                           
                            {Object.entries(technicalSkill).map(([category,skills]) =>(
                                <div key={category}>
                                    <h4>{category === 'languages' ? "Languages" :
                                        category === 'framework' ? "Frameworks, Libraries & Databases " : 
                                        "Tools & Other Technologies"}</h4>
                                        {skills.map(({id , skill}) => 
                                        <div key={id}> 
                                                <input
                                                type="text"
                                                value={skill}
                                                placeholder="Enter Skill"
                                                onChange={(e) => handleSkillChange(category , id ,e.target.value)}
                                                />
                                            <button className="remove-btn" onClick={() => remove(category,id)} > remove </button>
                                        </div>
                                        )}
                                        <button className="add-btn" onClick={() => addSkill(category)}> Add Skill </button>
                                </div>
                            ))}                          
                    </div>
        </div>
    )
}



export default TechnicalSkills;
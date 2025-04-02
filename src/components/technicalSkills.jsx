import "../styles/technicalSkill.css";

const TechnicalSkills = ({ technicalSkill, setTechnicalSkill }) => {

    const addSkill = (category) => {
        setTechnicalSkill((prevSkills) => ({
            ...prevSkills,
            [category]: [...prevSkills[category], { id: crypto.randomUUID(), skill: '' }]
        }));
    };

    const remove = (category, id) => {
        setTechnicalSkill((prev) => ({
            ...prev,
            [category]: prev[category].filter((skill) => skill.id !== id)
        }))
    }

    const handleSkillChange = (category, id, value) => {
        setTechnicalSkill((prevSkills) => ({
            ...prevSkills,
            [category]: prevSkills[category].map(skill =>
                skill.id === id ? { ...skill, skill: value } : skill
            )
        }));
    };

    return (
            <div className="skill-form-container">
                <div className="form-scrollable">
                    {Object.entries(technicalSkill).map(([category, skills]) => (
                        <div key={category} className="skill-category">
                            <h4 className="category-title">
                                {category === 'languages' ? "Languages" :
                                    category === 'framework' ? "Frameworks, Libraries & Databases" :
                                    "Tools & Other Technologies"}
                            </h4>
                            <div className="skills-list">
                                {skills.map(({ id, skill }) =>
                                    <div key={id} className="skill-item">
                                        <input
                                            type="text"
                                            value={skill}
                                            placeholder="Enter Skill"
                                            onChange={(e) => handleSkillChange(category, id, e.target.value)}
                                            className="skill-input"
                                            />
                                        <button className="remove-skill-btn" onClick={() => remove(category, id)}>
                                            Remove
                                        </button>
                                    </div>
                                )}
                                <button className="add-skill-btn" onClick={() => addSkill(category)}>
                                    + Skill
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default TechnicalSkills;
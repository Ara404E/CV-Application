import { useState } from "react"

const WorkExperience = ({workExperience , setWorkExperince}) => {
    const [isOpen , setOpen] = useState(false)

   const addJob = () =>{
            setWorkExperince(prev => 
                [...prev , {id : crypto.randomUUID() , company : "" 
                    , position : ""  , duration : "" , address : '' }]
            )
    }


    const remove = (id) =>{
        setWorkExperince(prev => prev.filter(exper => exper.id != id))
    }


    const handleInputChange = (id , field , value) => {
        setWorkExperince((prev) => 
            prev.map((job) => 
                job.id === id ? { ...job , [field] : value } : job 
            ) 
        )
    
    }

    

    return (
        <div className="dropdown-container">
            <button className="dropdown-btn" onClick={() => setOpen(!isOpen)}>
                {isOpen ? "▲" : "▼ Work Experience "}
            </button>
            <div className={`dropdown-content ${isOpen ? "show" : '' }`}>
                     <h2>Work Experience</h2>
                     {workExperience.map(({id,company,position,duration,address})=> (
                        <div key={id}>
                            <label> company name </label>
                            <input
                            type="text"
                            value={company}
                            placeholder="company name"
                            onChange={(e) => handleInputChange(id,"company",e.target.value)}
                            />
                            <input
                            type="text"
                            value={position}
                            placeholder="working position"
                            onChange={(e) => handleInputChange(id,"position",e.target.value)}
                            />
                            <input
                            type="text"
                            value={duration}
                            placeholder="Mar. 2025 - Present(Month Year - Month Year/Present)"
                            onChange={(e) => handleInputChange(id,"duration",e.target.value)}
                            />
                            <input
                            type="text"
                            value={address}
                            placeholder="Blue Sky, (City / Country)"
                            onChange={(e) => handleInputChange(id,"address",e.target.value)}
                            />
                            <button className="remove-btn" onClick={() => remove(id)} > remove </button>
                        </div>
                     ) )}
            <button onClick={addJob} className="add-btn"> add work Experience </button>
            </div>
        </div>
    )
}


export default WorkExperience;
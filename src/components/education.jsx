import { useState } from "react"
import { renderToReadableStream } from "react-dom/server"


const Education = ({education , setEducation}) => {
    
    const [isOpen , setOpen] = useState(false)

    const addMore = () =>{
        setEducation((prev) => 
        [...prev , { id : crypto.randomUUID() , 
            university: '' , degree : '' ,
            graduation : '' , address : ''}]
        )}


    const handleInputChange = (id,field,value) => {
        setEducation((prev) => 
            prev.map((edu) =>
                edu.id === id ? {...edu ,[field] : value } : edu
            ) 
        )
    }

    const remove = (id)=>{
        setEducation((prev)=> prev.filter((edu) => edu.id != id))
    }

    return(
            <div className="dropdown-container">

                <button className="dropdown-btn" onClick={() => setOpen(!isOpen)}>
                                {isOpen ? "▲" : "▼ Education"}
                </button>
                    <div className={`dropdown-content ${isOpen ? "show" : "" }`}>

                            {education.map(({id,university,degree,graduation,address}) => (
                              <div key={id}>    
                                <div className="input-group">
                                    <input
                                    type="text"
                                    value={university}
                                    placeholder="University Name"
                                    onChange={(e) => handleInputChange(id , "university" , e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                    type="text"
                                    value={degree}
                                    placeholder="Degree"
                                    onChange={(e) => handleInputChange(id , "degree", e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                    type="text"
                                    value={graduation || ""}
                                    placeholder="May 2025"
                                    onChange={(e) => handleInputChange(id , "graduation", e.target.value)}
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                    type="text"
                                    value={address}
                                    placeholder="GoodWell, Motherland"
                                    onChange={(e) => handleInputChange(id , "address", e.target.value)}
                                    />
                                </div>
                                <button onClick={() => remove(id)} className="remove-btn"> remove </button>
                             </div>
                                ))
                            }
                    <button onClick={addMore} className="add-btn" >  add more </button>
                    </div>

            </div>
    )
} 


export default Education;
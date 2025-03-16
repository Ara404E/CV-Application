import { useState } from "react";


const Link = ({link , setLink}) =>{
    const [isOpen , setOpen] = useState(false)
    return(
       <div className="dropdown-container">
                <button className="dropdown-btn" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? "▲" : "▼ Links"}
                </button>
        <div className="header">
            <h1> {isOpen ? "Links" : ""} </h1>
            </div>
        <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
            <label> Website </label>
            <input
            type="url"
            value={link.website}
            placeholder="https://www.johndoe.com"
            onChange={(e) => setLink({ ...link , website: e.target.value})}
            />
            <input
            type="text"
            value={link.websiteText}
            placeholder="johndoe.com"
            onChange={(e) => setLink({ ...link , websiteText: e.target.value}) }
            />
            <label> Linkedin </label>
            <input
            type="url"
            value={link.linkedin}
            placeholder="https://www.linkedin.com/john doe"
            onChange={(e) => setLink({...link , linkedin: e.target.value})}
            />
            <input
            type="text"
            value={link.linkedinText}
            placeholder="john doe"
            onChange={(e) => setLink({...link , linkedinText: e.target.value})}
            />
            <label> GitHub </label>
            <input
            type="url"
            value={link.gitHub}
            placeholder="https://www.github.com/johndoe"
            onChange={(e) => setLink({...link , github:e.target.value})}
            />
            <input
            type="text"
            value={link.githubText}
            placeholder="johndoe"
            onChange={(e) => setLink({...link , githubText:e.target.value})}
            />
        </div>
    </div> 
    
    )
}


export default Link;
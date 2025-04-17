import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLaptop, faEnvelope }  from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/cvPreview.css'


function CvPreview({personalInfo , link , technicalSkill , workExperience , project , education , certification,font}){
    return (
        <>
        <div className='cv-preview-content' style={{fontFamily: font}}>
                <div className="personal-details-section">
                <h1> {personalInfo.name || "Your Name"}  </h1>
                <h3> {personalInfo.job || "Job Title"} </h3>
                <div className='link-section'>
                <p> {personalInfo.email ? <FontAwesomeIcon icon={faEnvelope} /> :  "your.email.com"} <a href={personalInfo.email}> {personalInfo.email} </a> </p>
                <p> {link.website ?  <FontAwesomeIcon icon={faLaptop} /> : "website URL"} <a href={link.website}> {link.websiteText || 'displayed text'}  </a> </p>
                <p> {link.linkedin ? <FontAwesomeIcon icon={faLinkedin} /> : "Website URL"} <a href={link.linkedin} > {link.linkedinText || 'displayed text'} </a> </p> 
                <p> {link.github ? <FontAwesomeIcon icon={faGithub} /> : 'Website URL'} <a href={link.github} >  {link.githubText || 'displayed text '} </a> </p>
                </div>
                <hr/>
                <p> Phone Number: {personalInfo.tel || "969-969-969"} </p>
                <p> Address: {personalInfo.address || "Blue Island, metaverse"} </p>
                <p> {personalInfo.summary ? `summary: ${personalInfo.summary}` : ""} </p>
                </div>
                
                <div className="technical-skill-section"> 

                <h2> TECHNICAL SKILLS </h2>
                <hr/>
                <h3> Languages: </h3>
                <ul>
                     {technicalSkill.languages.map(({id,skill}) => 
                        <li key={id}> {skill || "language"} </li>
                    )}
                </ul>
                <h3> Frameworks, Libraries & Databases: </h3>
                    <ul>
                        {technicalSkill.frameworks.map(({id,skill})=>
                            <li key={id}> {skill || "Frameworks, Libraries & Databases"} </li>
                    )}
                    </ul>

                    <h3> Tools & Other Technologies: </h3>
                    <ul>
                        {technicalSkill.tools.map(({id,skill})=>
                            <li key={id}> {skill || "Tools & other Technologies"} </li>
                    )}
                    </ul>
                    </div>


                     <h3> WORK EXPERIENCE </h3>
                    <hr/>
                            {workExperience.map((work)=> (
                                <div>
                                <div className="work-experience-section" key={work.id}>
                                    <div>
                                        <h4> {work.company || "company name"} </h4>  
                                        <p> <i> {work.position || "working position"} </i> </p>  
                                    </div>

                                    <div>
                                        <h4> {work.duration || "duration" } </h4>  
                                        <p> <i> {work.address || "address" } </i> </p>  
                                    </div>
                                </div>
                                    <div>
                                    {work.extra.map((specification,index)=>
                                        <li key={index}> {specification.specification}  </li>)}
                                    </div>
                            </div>
                                
                            ))} 

                    <h3> PROJECTS </h3>
                    <hr/>
                    {project.map((project) =>
                    <div>
                        <div key={project.id} className="project-section">
                            <p> <b>  {`${project.name}` || 'Project Name'}  </b>
                            <span>- {project.techStack || "Tech stack used for project"} </span> </p>
                            <span> Code: </span> <a href={project.repoURL} className="website-text">{project.repo} </a> 
                            <span className="demo-text">  Demo: </span> <a href={project.demoURL}> {project.demo} </a>  
                        </div> 
                        <div>
                            {project.bulletPoints.map((project,index) => 
                                        <li className="bullet-point-project" key={index}> {project} </li>
                                    )}
                        </div>
                    </div>
                        )}
                        
                    <h3> EDUCATION </h3>
                    <hr/>
                            {education.map((education)=> (
                                <>
                            <div className="graduation-section" key={education.id}>
                                <div>
                                    <h4> {education.university || "University Name"} </h4>
                                    <p> <i> {education.degree || "Degree" } </i> </p>
                                </div>
                                <div>
                                    <h4> {education.graduation || "Graduation year"} </h4>
                                    <p> <i> {education.address || "Address" } </i> </p>
                                </div>
                                
                                
                                </div>
                                    
                                <div className="">
                                {education.extra.map((project , index) => 
                                        <li key={index}> {project.project} </li>)} 
                                </div>
                            </>
                            ))}
                
                        <h3> CERTIFICATE & SKILL INTERESTS </h3>
                    <hr/>
                            <div className="certificate-section">
                                <div className="row">
                                    <h4> Certificate:</h4> <p>{certification.certificate || "If you have any relevant ones; otherwise leave blank"} </p>
                                </div>
                                <div className="row">
                                    <h4> Skills:</h4> <p>{certification.skill || "Strategic Planning, Problem Solving, Leadership, Teamwork, etc"}  </p> 
                                </div>
                                <div className="row">
                                    <h4> Interest:</h4> <p>{certification.interest || "Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football"}  </p> 
                                </div>
                            </div>
                    </div>
            </>
    )
}

export default CvPreview;
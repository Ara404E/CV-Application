import '../styles/cvPreview.css'

function CvPreview({personalInfo , link , technicalSkill , workExperience , project , education , certification}){
    return (
        <div className={`cv-preview-content`}>
                <div className="personal-details-section">
                <h1> {personalInfo.name || "Your Name"}  </h1>
                <h3> {personalInfo.job || "Job Title"} </h3>
                <p> {link.website || "website URL"} <span> {link.websiteText || ' displayed text  '}  </span> 
                    {link.linkedin || "linkedin URL"} <span> {link.linkedinText || 'displayed text  '} </span> 
                    {link.github || "github URL"} <span> {link.githubText || 'displayed text '} </span> </p>
                <hr/>
                <p> Email: {personalInfo.email || "your.email.com"} </p>
                <p> Phone Number: {personalInfo.tel || "969-969-969"} </p>
                <p> Address: {personalInfo.address || "Blue Island, metaverse"} </p>
                <p> summary: {personalInfo.summary || "Summary about yourself (not recommended)"} </p>
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
                            <li key={id}> {skill || "Framework , Libirares & Database"} </li>
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
                            ))}

                    <h3> PROJECTS </h3>
                    <hr/>
                    <div className="project-section">
                    {project.map((project) =>
                        <div key={project.id} className="project-section">
                            <p>  <b>  { `${project.name}` || 'Project Name' }  </b>  <span>- {project.techStack || "Tech stack used for project"} </span> </p>
                             <span> Code: </span> <a href={project.repoURL} className="website-text">{project.repo} </a> <span className="demo-text">  Demo: </span> <a href={project.demoURL}> {project.demo} </a>  
                        </div> 
                        )}
                        </div>
                        
                    <h3> EDUCATION </h3>
                    <hr/>
                            {education.map((education)=> (
                            <div className="graduation-section" key={education.id}>
                                <div>
                                    <h4> {education.university || "University Name"} </h4>
                                    <p> <i> {education.degree || "Degree" } </i> </p>
                                </div>
                                <div>
                                    <h4> {education.graduation || "Graduation year"} </h4>
                                    <p> <i> {education.address || "Address" } </i> </p>
                                </div>
                                <div>
                                    {education.extra.map((project , index) => 
                                        <li key={index}> {project.projectv} </li>
                                    )}    
                                </div>
                            </div>    
                            ))}
                
                        {/* <h3> CERTIFICATE & SKILL INTERESTS </h3>
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
                            </div> */}
                    </div>
    )
}

export default CvPreview;
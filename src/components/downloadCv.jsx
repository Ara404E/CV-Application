import { useRef } from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import html2pdf from 'html2pdf.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLaptop, faEnvelope,faCircleDown}  from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import '../styles/downloadCv.css'

const DownloadCv = ({personalInfo , link , technicalSkill , workExperience , project , education , certification, font}) => {

    const cvRef = useRef();

    const handleDownloadPDF = () => {
        const element = cvRef.current;
        const opt = {
            margin: 10,
            filename: `${personalInfo.name || 'CV'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    const handleDownloadDOCX = async () => {
        const doc = new Document({
            sections: [
                {
                    children: [
                        // Personal Details Section
                        new Paragraph({
                            children: [
                                new TextRun({text: personalInfo.name || "Your Name", bold: true, size: 32}),
                                new TextRun({text: `\n${personalInfo.job || "Job Title"}`, bold: true, size: 28})
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: `Email: ${personalInfo.email || "your.email@xyz.com"}`}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: `Website: ${link.websiteText || "yourwebsite.com"} (${link.website || ""})`}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: `LinkedIn: ${link.linkedinText || "linkedin profile"} (${link.linkedin || ""})`}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: `GitHub: ${link.githubText || "github profile"} (${link.github || ""})`}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: `Phone: ${personalInfo.tel || "969-969-969"}`}),
                                new TextRun({text: `\nAddress: ${personalInfo.address || "Blue Island, Metaverse"}`}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: `\nSummary: ${personalInfo.summary || ""}`}),
                            ]
                        }),
                        new Paragraph({text: '────────────────────────────────────────────'}),

                        // Technical Skills Section
                        new Paragraph({text: 'TECHNICAL SKILLS', heading: HeadingLevel.HEADING_2}),
                        new Paragraph({text: '────────────────────────────────────────────'}),
                        new Paragraph({text: 'Languages:', bold: true}),
                        new Paragraph({
                            children: technicalSkill.languages.map(skill => 
                                new TextRun({text: `• ${skill.skill || "language"}\n`, break: 1})
                            )
                        }),
                        new Paragraph({text: 'Frameworks, Libraries & Databases:', bold: true}),
                        new Paragraph({
                            children: technicalSkill.frameworks.map(skill => 
                                new TextRun({text: `• ${skill.skill || ""}\n`, break: 1})
                            )
                        }),
                        new Paragraph({text: 'Tools & Other Technologies:', bold: true}),
                        new Paragraph({
                            children: technicalSkill.tools.map(skill => 
                                new TextRun({text: `• ${skill.skill || "Tools & other Technologies"}\n`, break: 1})
                            )
                        }),

                        // Work Experience Section
                        new Paragraph({text: 'WORK EXPERIENCE', heading: HeadingLevel.HEADING_2}),
                        new Paragraph({text: '────────────────────────────────────────────'}),
                        ...workExperience.flatMap(work => [
                            new Paragraph({
                                children: [
                                    new TextRun({text: work.company || "company name", bold: true}),
                                    new TextRun({text: `\t${work.duration || "duration"}`}),
                                ]
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({text: work.position || "working position", italics: true}),
                                    new TextRun({text: `\t${work.address || "address"}`}),
                                ]
                            }),
                            ...work.extra.map(spec => 
                                new Paragraph({
                                    text: `• ${spec.specification}`,
                                    indent: { left: 720 }
                                })
                            ),
                            new Paragraph({text: ''}) // Empty line between entries
                        ]),

                        // Projects Section
                        new Paragraph({text: 'PROJECTS', heading: HeadingLevel.HEADING_2}),
                        new Paragraph({text: '────────────────────────────────────────────'}),
                        ...project.flatMap(proj => [
                            new Paragraph({
                                children: [
                                    new TextRun({text: proj.name || 'Project Name', bold: true}),
                                    new TextRun({text: ` - ${proj.techStack || "Tech stack used for project"}`}),
                                ]
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({text: 'Code: '}),
                                    new TextRun({text: proj.repo || "", style: 'Hyperlink'}),
                                    new TextRun({text: '\tDemo: '}),
                                    new TextRun({text: proj.demo || "", style: 'Hyperlink'}),
                                ]
                            }),
                            ...proj.bulletPoints.map((point) => 
                                new Paragraph({
                                    text: `• ${point}`,
                                    indent: { left: 720 }
                                })
                            ),
                            new Paragraph({text: ''}) // Empty line between entries
                        ]),

                        // Education Section
                        new Paragraph({text: 'EDUCATION', heading: HeadingLevel.HEADING_2}),
                        new Paragraph({text: '────────────────────────────────────────────'}),
                        ...education.flatMap(edu => [
                            new Paragraph({
                                children: [
                                    new TextRun({text: edu.university || "University Name", bold: true}),
                                    new TextRun({text: `\t${edu.graduation || "Graduation year"}`}),
                                ]
                            }),
                            new Paragraph({
                                children: [
                                    new TextRun({text: edu.degree || "Degree", italics: true}),
                                    new TextRun({text: `\t${edu.address || "Address"}`}),
                                ]
                            }),
                            ...edu.extra.map(item => 
                                new Paragraph({
                                    text: `• ${item.project}`,
                                    indent: { left: 720 }
                                })
                            ),
                            new Paragraph({text: ''}) // Empty line between entries
                        ]),

                        // Certificate & Skills Section
                        new Paragraph({text: 'CERTIFICATE & SKILL INTERESTS', heading: HeadingLevel.HEADING_2}),
                        new Paragraph({text: '────────────────────────────────────────────'}),
                        new Paragraph({
                            children: [
                                new TextRun({text: 'Certificate: ', bold: true}),
                                new TextRun({text: certification.certificate || "If you have any relevant ones; otherwise leave blank"}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: 'Skills: ', bold: true}),
                                new TextRun({text: certification.skill || "Strategic Planning, Problem Solving, Leadership, Teamwork, etc"}),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({text: 'Interest: ', bold: true}),
                                new TextRun({text: certification.interest || "Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football"}),
                            ]
                        })
                    ]
                }
            ]
        });

        const blob = await Packer.toBlob(doc);
        saveAs(blob, `${personalInfo.name || 'CV'}.docx`);
    }

    return (
        <>
            <div className="download-btn-div">
                <button onClick={handleDownloadPDF}>
                    <FontAwesomeIcon icon={faCircleDown} size="lg" />
                    <span> PDF </span>
                </button>
                <button onClick={handleDownloadDOCX}>
                    <FontAwesomeIcon icon={faCircleDown} size="lg"/> 
                    <span> DOCX</span>
                </button>
            </div>
            <div className='download-cv-content'  style={{fontFamily: font}} ref={cvRef}>
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
                                <li key={index}> {project} </li>
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

export default DownloadCv
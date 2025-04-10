import { useState , useEffect } from 'react'
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-tooltip/dist/react-tooltip.css'; 
import { faUser, faLink, faBrain, faBriefcase, faFolderOpen, faUserGraduate, faAward , faEye, faTrash, faEyeSlash,faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import '../styles/App.css'
import FontSwitcher from './fontSwitcher'; 
import GeneralInfo from './generalInfo';
import Link from './links.jsx';
import TechnicalSkills from './technicalSkills.jsx';
import CvPreview from './cvPreview.jsx';
import WorkExperience from './workExperience.jsx';
import Project from './project.jsx';
import Education from './education.jsx';
import Certification from './certification.jsx';
import DownloadCv from './downloadCv.jsx'
import { useLocalStorage } from './localStorage.js';

function App() {
    const [activeForm, setActiveForm] = useLocalStorage('activeForm' , 'personal');
    const [preview, setPreview] = useLocalStorage( "preview" , false);



    const [personalInfo, setPersonalInfo] = useLocalStorage( 'personalInfo' , {
        name: "",
        job: "",
        email: "",
        tel: "",
        address: "",
        summary: "",
    });

    const [link, setLink] = useLocalStorage("link" , {
        website: "",
        websiteText: '',
        linkedin: "",
        linkedinText: '',
        github: "",
        githubText: ''
    });

    const [technicalSkill, setTechnicalSkill] = useLocalStorage( "technicalSkill" ,{
        languages: [{ id: crypto.randomUUID(), skill: '' }],
        frameworks: [{ id: crypto.randomUUID(), skill: '' }],
        tools: [{ id: crypto.randomUUID(), skill: '' }]
    });

    const [workExperience, setWorkExperince] = useLocalStorage( "workExperience"  ,[
        { id: crypto.randomUUID(), company: '', position: '',
             duration: '', address: '' , extra:[{ specification: '' }] }
    ]);

    const [project, setProject] = useLocalStorage( "project" , [
        { id: crypto.randomUUID(), name: '', techStack: '', bulletPoints:[''] , repoURL: ''
        , repo: '', demoURL: '', demo: '' }
    ]);

    const [education, setEducation] = useLocalStorage( "education" ,  [
        { id: crypto.randomUUID(), university: '', degree: '', graduation: '', address: '',
          extra: [{ project: '' }] }
    ]);

    const [certification, setCertification] = useLocalStorage( "certification" , {
        certificate: '', skill: '', interest: ''
    });

    return (
        <div className='app'>
            {/* Sidebar Navigation */}
            <div className='sidebar'>
                <button 
                    className={`nav-btn ${activeForm === 'personal' && 'active'}`}
                    onClick={() => setActiveForm('personal')}
                    data-tooltip-id="personal-details-tooltip"  // Changed to more unique ID
                    data-tooltip-content="Personal Details"
                    data-tooltip-place="right" 
                >
                    <FontAwesomeIcon icon={faUser} size='2x' />
                </button>
                <Tooltip 
                    id="personal-details-tooltip"
                    className={`tooltip`}
                />
                <button 
                    className={`nav-btn ${activeForm === 'links' && 'active'}`}
                    onClick={() => setActiveForm('links')}
                    data-tooltip-id='link-tooltip'
                    data-tooltip-content="Links"
                    data-tooltip-place='right'
                >
                    <FontAwesomeIcon icon={faLink} size='2x'/>
                </button>
                    <Tooltip
                        id='link-tooltip'
                        className='tooltip'
                    />
                <button 
                    className={`nav-btn ${activeForm === 'skills' && 'active'}`}
                    onClick={() => setActiveForm('skills')}
                    data-tooltip-id="technical-skill-tooltip"
                    data-tooltip-content="Technical Skills"
                    data-tooltip-place='right'
                >
                    <FontAwesomeIcon icon={faBrain} size="2x" />
                </button>
                    <Tooltip
                        id='technical-skill-tooltip'
                        className='tooltip'
                    />
                <button 
                    className={`nav-btn ${activeForm === 'work' && 'active'}`}
                    onClick={() => setActiveForm('work')}
                    data-tooltip-id='work-tooltip'
                    data-tooltip-content='Work Experience'
                    data-tooltip-place="right"
                >
                    <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </button>
                    <Tooltip
                        id='work-tooltip'
                        className='tooltip'
                    />
                <button 
                    className={`nav-btn ${activeForm === 'projects' && 'active'}`}
                    onClick={() => setActiveForm('projects')}
                    data-tooltip-id='project-tooltip'
                    data-tooltip-content='Project'
                    data-tooltip-place="right"
                >
                    <FontAwesomeIcon icon={faFolderOpen} size="2x" />
                </button>
                <Tooltip
                        id='project-tooltip'
                        className='tooltip'
                    />
                <button 
                    className={`nav-btn ${activeForm === 'education' && 'active'}`}
                    onClick={() => setActiveForm('education')}
                    data-tooltip-id='education-tooltip'
                    data-tooltip-content='Education'
                    data-tooltip-place="right"
                >
                    <FontAwesomeIcon icon={faUserGraduate} size="2x" />
                </button>
                <Tooltip
                        id='education-tooltip'
                        className='tooltip'
                    />
                <button className={`nav-btn ${activeForm=== 'certificate' && "active"}`}
                    onClick={() => setActiveForm("certificate")}
                    data-tooltip-id='certificate-tooltip'
                    data-tooltip-content='Certification, Skills & Interest'
                    data-tooltip-place="right"
                >
                    <FontAwesomeIcon icon={faAward} size='2x' />
                </button>
                <Tooltip
                        id='certificate-tooltip'
                        className='tooltip'
                    />
            <div className='midway-sidebar'>

            <button
                    className={`nav-btn ${  preview && 'active'}`}
                    onClick={() => setPreview(!preview) }
                    disabled={activeForm === 'downloadCv'} // 👈 this disables the button
                    data-tooltip-id='live-preview-tooltip'
                    data-tooltip-place="right"

                >
                <FontAwesomeIcon icon={ preview ? faEyeSlash : faEye} size='2x'  />      
                </button>
                <Tooltip
                    id='live-preview-tooltip'
                    className='tooltip'
                    content={
                        activeForm === 'downloadCv' ? 'Preview disabled whilst on download preview' :
                        preview ? 'Editior only' : "Live Preview"}
                /> 

                
            </div>
            <div className='end-sidebar'>
            <button className={`nav-btn ${activeForm === 'downloadCv' && 'active'} `}
                onClick={() => {setActiveForm("downloadCv")
                                setPreview(false)}}
                data-tooltip-id="preview-download-cv-tooltip"
                data-tooltip-place="right"
                >
                        <FontAwesomeIcon icon={faFileArrowDown} size="2x" />
                </button>     

                <Tooltip
                id='preview-download-cv-tooltip'
                className='tooltip'
                content='Preview PDF & Download'
                />

                <button
                className='nav-btn'
                onClick={() => {
                if (window.confirm('Are you sure you want to clear all data?')) {
                    localStorage.clear();
                    window.location.reload();
                }
            }}
            data-tooltip-id='clear-data-tooltip'
            data-tooltip-content='Clear CV'
            data-tooltip-place="right">

            <FontAwesomeIcon icon={faTrash} size='2x' />
        </button>
            <Tooltip
             id='clear-data-tooltip'
             className='tooltip'
                />
        </div>
        </div>
            {/* Main Content Area */}
            <div className={`main-container ${preview && "preview-active"}`}>
                <div className='main-content'>
                    {activeForm === 'personal' && (
                        <GeneralInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
                    )}
                    
                    {activeForm === 'links' && (
                        <Link link={link} setLink={setLink} />
                    )}
                    
                    {activeForm === 'skills' && (
                        <TechnicalSkills technicalSkill={technicalSkill} setTechnicalSkill={setTechnicalSkill} />
                    )}
                    
                    {activeForm === 'work' && (
                        <WorkExperience workExperience={workExperience} setWorkExperince={setWorkExperince} />
                    )}
                    
                    {activeForm === 'projects' && (
                        <Project project={project} setProject={setProject} />
                    
                    )}
                    
                    {activeForm === 'education' && (
                        <Education education={education} setEducation={setEducation} />
                    )}

                    {activeForm === "certificate" &&  (
                        <Certification certification={certification} setCertification={setCertification}/>
                    )}
                   
                   {activeForm === 'downloadCv' && 
                    <div className='cv-download-container'>
                        <DownloadCv
                        personalInfo={personalInfo}
                        link={link}
                        technicalSkill={technicalSkill}
                        workExperience={workExperience}
                        project={project}
                        education={education}
                        certification={certification}
                        />
                    </div>
                    }
                </div>
                {/* CV Preview - can be always visible or toggled */}
                    <div className={`cv-preview-container ${preview && "active"}`}>
                    <CvPreview
                        personalInfo={personalInfo}
                        link={link}
                        technicalSkill={technicalSkill}
                        workExperience={workExperience}
                        project={project}
                        education={education}
                        certification={certification}
                        /> 
                </div>

            </div>
       
        </div>

        
    )
}

export default App;
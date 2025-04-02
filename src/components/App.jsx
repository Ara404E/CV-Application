import { useState } from 'react'
import { Tooltip } from 'react-tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-tooltip/dist/react-tooltip.css'; // Don't forget this import
import { faUser, faLink, faBrain, faBriefcase, faFolderOpen, faUserGraduate, faAward , faEye } from "@fortawesome/free-solid-svg-icons";
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

function App() {
    const [activeForm, setActiveForm] = useState('personal');
    const [preview, setPreview] = useState(false);



    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        job: "",
        email: "",
        tel: "",
        address: "",
        summary: "",
    });

    const [link, setLink] = useState({
        website: "",
        websiteText: '',
        linkedin: "",
        linkedinText: '',
        github: "",
        githubText: ''
    });

    const [technicalSkill, setTechnicalSkill] = useState({
        languages: [{ id: crypto.randomUUID(), skill: '' }],
        frameworks: [{ id: crypto.randomUUID(), skill: '' }],
        tools: [{ id: crypto.randomUUID(), skill: '' }]
    });

    const [workExperience, setWorkExperince] = useState([
        { id: crypto.randomUUID(), company: '', position: '',
             duration: '', address: '' , extra:[{ specification: '' }] }
    ]);

    const [project, setProject] = useState([
        { id: crypto.randomUUID(), name: '', techStack: '', bulletPoints:[''] , repoURL: ''
        , repo: '', demoURL: '', demo: '' }
    ]);

    const [education, setEducation] = useState([
        { id: crypto.randomUUID(), university: '', degree: '', graduation: '', address: '',
          extra: [{ project: '' }] }
    ]);

    const [certification, setCertification] = useState({
        certificate: '', skill: '', interest: ''
    });

    return (
        <div className='app'>
            {/* Sidebar Navigation */}
            <div className='sidebar'>
                <button 
                    className={`nav-btn ${activeForm === 'personal' ? 'active' : ''}`}
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
                    className={`nav-btn ${activeForm === 'links' ? 'active' : ''}`}
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
                    className={`nav-btn ${activeForm === 'skills' ? 'active' : ''}`}
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
                    className={`nav-btn ${activeForm === 'work' ? 'active' : ''}`}
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
                    className={`nav-btn ${activeForm === 'projects' ? 'active' : ''}`}
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
                    className={`nav-btn ${activeForm === 'education' ? 'active' : ''}`}
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
                <button className={`nav-btn ${preview ? "active" : '' }`}
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
                <button
                    className={`nav-btn ${preview ? 'active' : ''}`}
                    onClick={() => setPreview(!preview)}
                    data-tooltip-id='cv-preview-tooltip'
                    data-tooltip-content='Preview CV'
                    data-tooltip-place="right"
                >
                    <FontAwesomeIcon icon={faEye} size='2x' />
                </button>
                <Tooltip
                    id='cv-preview-tooltip'
                    className='tooltip'
                />
            </div>

            {/* Main Content Area */}
            <div className={`main-container ${preview ? "preview-active" : ''}`}>
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
                </div>

                {/* CV Preview - can be always visible or toggled */}
                <div className={`cv-preview-container ${preview ? "active" : ''}`}>
                    <CvPreview
                        personalInfo={personalInfo}
                        link={link}
                        technicalSkill={technicalSkill}
                        workExperience={workExperience}
                        project={project}
                        certification={certification}
                        education={education}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default App;
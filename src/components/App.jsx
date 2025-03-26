import {  useState } from 'react'
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
    const [personalInfo , setPersonalInfo ] = useState({
        name: "",
        job: "",
        email: "",
        tel: "",
        address: "",
        summary: "",
    })
    const [link , setLink] = useState({
        website: "",
        websiteText:'',
        linkedin:"",
        linkedinText:'',
        github:"",
        githubText:''
    })

    const [technicalSkill , setTechnicalSkill] = useState({
      languages :  [{id:crypto.randomUUID(), skill:'' }],
      frameworks: [{id:crypto.randomUUID(), skill:'' }],
      tools: [{id:crypto.randomUUID(), skill:'' }]
    })

    const [workExperience , setWorkExperince] = useState([
        { id : crypto.randomUUID() , company : ''  , position : ''
             , duration : '' , address: ''  }
    ])
    
    const [project , setProject] = useState([
        { id : crypto.randomUUID() , name : '' ,
         techStack : '' , repoURL: '' , repo: '' , demoURL : '' , demo : '' }
    ])

    const [education , setEducation] = useState([
        { id: crypto.randomUUID() , university: '' , degree : '' , 
        garduation : '' , address : '' }
    ])

    const [certification , setCertification] = useState({
        certificate : '' , skill : '' , interest : ''
    })

    

    return(

 <div className='app'>

    <div className='main-container'>

            <GeneralInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

            <Link link={link} setLink={setLink}/>

            <TechnicalSkills technicalSkill={technicalSkill} setTechnicalSkill={setTechnicalSkill}/>

            <WorkExperience workExperience={workExperience} setWorkExperince={setWorkExperince}/>

            <Project project={project} setProject={setProject}/>

            {/* <Education education={education} setEducation={setEducation} /> */}

            {/* <Certification certification={certification} setCertification={setCertification}/> */}
    

            <div>
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

export default App

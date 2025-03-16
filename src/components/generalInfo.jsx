import {useState} from 'react';


function GeneralInfo({personalInfo ,  setPersonalInfo}){
    const [ isOpen , setOpen ] = useState(false)
    return(
        <div className='dropdown-container'>
            <button className='dropdown-btn' onClick={() => setOpen(!isOpen)}>
                    {isOpen ? "▲" : "▼ Personal Details"}    
            </button>
            <div className='header'>
                <h1> {isOpen ? "Personal Details" : ""}  </h1>
            </div>
        <div className={`dropdown-content ${isOpen ? "show" : "" }`}>
            <div className='input-group'>
        <label> Full Name </label>
            <input 
                type='text'
                placeholder='Full Name'
                value={personalInfo.name}
                onChange={(e) => setPersonalInfo({ ...personalInfo , name: e.target.value})}
                />
            </div>
            <div className='input-group'> 

            <label> Job Title <span> (Optional) </span> </label>
            <input
                type='text'
                placeholder='Software Developer'
                value={personalInfo.job}
                onChange={(e) => setPersonalInfo({...personalInfo , job: e.target.value})}
                />
                </div>
             <div className='input-group'> 

             <label> Email </label>
            <input
                type='email'
                placeholder='jondoe@mail.com'
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({...personalInfo , email: e.target.value})}
                />
                </div>
             <div className='input-group'> 

             <label> Phone Number <span> (Optional) </span> </label>
            <input
                type='tel'
                placeholder='770 432 7562'
                value={personalInfo.tel}
                onChange={(e) => setPersonalInfo({...personalInfo , tel: e.target.value})}
                />
                </div>
             <div className='input-group'> 

             <label> Address <span> (Optional) </span> </label>
            <input
                type='text'
                placeholder='Blue Island, Metaverse'
                value={personalInfo.address}
                onChange={(e) => setPersonalInfo({...personalInfo , address: e.target.value})}
                />
                </div>
             <div className='input-group'> 
             <label> Summary <span> (not recommended) </span> </label>
            <textarea
                type='text'
                placeholder='As a Software Developer'
                value={personalInfo.summary}
                onChange={(e) => setPersonalInfo({...personalInfo , summary: e.target.value})}
                />
                </div>
        </div>
        <div/>
                </div>
    )
}


export default GeneralInfo;
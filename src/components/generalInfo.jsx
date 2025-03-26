import {useState} from 'react';
import "../styles/personalDetails.css"

function GeneralInfo({personalInfo ,  setPersonalInfo}){
    const [ isOpen , setOpen ] = useState(false)
    return(
<>
        {/* <div className='sidebar'> */}
                <div className='layout-div'>
            <div className='layout-btn-div'>
            <button className='layout-btn' onClick={() => setOpen(!isOpen)}>
                    Show    
            </button>
                </div>
            </div>
        {/* </div> */}

        <div className={`form-container ${isOpen ? "show" : ""}`}>
    <div className="form-title-div">
        <h3>{isOpen ? "personal details" : ""}</h3>
    </div>

    <div className="form">
        <div className="personal-container">
            <div className="personal-input-container">
                <label>Full Name </label>
                        <input
                        type="text"
                        value={personalInfo.name}
                        placeholder="full name"
                        onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                        />
                
                        <label> Job Title </label>
                        <input
                        type="text"
                        value={personalInfo.job}
                        placeholder="Software Developer"
                        onChange={(e) => setPersonalInfo({...personalInfo, job: e.target.value})}
                        />
                
                        <label> Email </label>

                        <input
                        type="text"
                        value={personalInfo.email}
                        placeholder="full name"
                        onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                        />

                      
                        <label> Phone Number </label>
                        <input
                        type="tel"
                        value={personalInfo.tel}
                        placeholder="6969696969"
                        onChange={(e) => setPersonalInfo({...personalInfo, tel: e.target.value})}
                        />
                    
                
                        <label> Address <span> ( optional ) </span></label>
                        <input
                        type="text"
                        value={personalInfo.address}
                        placeholder="Blue Island, metaverse"
                        onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
                        />
                    
                        <label> summary <span>(not recommended)</span> </label>
                        <textarea
                        type="text"
                        value={personalInfo.summary}
                        placeholder="As a software developer i ...."
                        onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                        />
            </div>
        </div>
    </div>
</div>

</>
    )
}


export default GeneralInfo;
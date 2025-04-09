import "../styles/personalDetails.css"

function GeneralInfo({ personalInfo, setPersonalInfo }) {
    return (
    <div className="personal-form-container">

        <div className="personal-form">
            <h2>Personal Details</h2>
            
        <div className="personal-row">
            <div className="personal-section">
                <div className="labeled-input">
                <label>Full Name</label>
                <input
                    type="text"
                    value={personalInfo.name}
                    placeholder="John Doe"
                    onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                    />
                </div>
            </div>
            
            <div className="personal-section">
                <div className="labeled-input">
                    <label>Job Title <span className="optional"> optional </span> </label>
                    <input
                        type="text"
                        value={personalInfo.job}
                        placeholder="Software Developer"
                        onChange={(e) => setPersonalInfo({...personalInfo, job: e.target.value})}
                        />
                </div>
            </div>
        </div>
        <div className="personal-row">

            <div className="personal-section">
                <div className="labeled-input">
                    <label>Email <span className="optional">optional</span></label>
                    <input
                        type="email"
                        value={personalInfo.email}
                        placeholder="johndoe@xyz.com"
                        onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                        />
                </div>
            </div>
            
        
            <div className="personal-section">
                <div className="labeled-input">
                <label>Phone <span className="not-recommended">not recommended</span></label>
                <input
                    type="tel"
                    value={personalInfo.tel}
                    placeholder="777 125 6183"
                    onChange={(e) => setPersonalInfo({...personalInfo, tel: e.target.value})}
                    />
                </div>
            </div>
        </div> 
            
            {/* Phone Section */}
            <div className="personal-section">
                <div className="labeled-input">
                    <label>Address <span className="optional">optional</span></label>
                    <input
                        type="text"
                        value={personalInfo.address}
                        placeholder="Blue Island, metaverse"
                        onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
                        />
                </div>
            </div>
            
            {/* <div className="divider"></div> */}
            
            {/* Summary Section */}
            <div className="personal-form-row">
                <div className="labeled-input">
                <label>Summary <span className="not-recommended">not recommended</span></label>
                <textarea
                    value={personalInfo.summary}
                    placeholder="As a Principal Software Engineer, I ...."
                    onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default GeneralInfo
import "../styles/personalDetails.css"

function GeneralInfo({ personalInfo, setPersonalInfo }) {
    return (
    <div className="personal-form-container">

        <div className="personal-form">
            <h2>Personal Details</h2>
            
            {/* Full Name Section */}
            <div className="personal-form-row">
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
            
            {/* Email Section */}
            <div className="personal-form-row">
                <div className="labeled-input">
                    <label>Email</label>
                    <input
                        type="email"
                        value={personalInfo.email}
                        placeholder="johndoe@xyz.com"
                        onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                        />
                </div>
            </div>
            
            {/* Address Section */}
            <div className="personal-form-row">
                <div className="labeled-input">
                    <label>Address <span className="optional">optional</span></label>
                    <input
                        type="text"
                        value={personalInfo.address}
                        placeholder="Blue Island, Metaverse"
                        onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
                        />
                </div>
            </div>
            
            <div className="divider"></div>
            
            {/* Job Title Section */}
            <div className="personal-form-row">
                <div className="labeled-input">
                <label>Job Title <span className="optional">optional</span></label>
                <input
                    type="text"
                    value={personalInfo.job}
                    placeholder="Principal Software Engineer"
                    onChange={(e) => setPersonalInfo({...personalInfo, job: e.target.value})}
                    />
                </div>
            </div>
            
            {/* Phone Section */}
            <div className="personal-form-row">
                <div className="labeled-input">
                    <label>Phone <span className="not-recommended">not recommended</span></label>
                    <input
                        type="tel"
                        value={personalInfo.tel}
                        placeholder="944 704 8000"
                        onChange={(e) => setPersonalInfo({...personalInfo, tel: e.target.value})}
                        />
                </div>
            </div>
            
            <div className="divider"></div>
            
            {/* Summary Section */}
            <div className="personal-form-row">
                <div className="labeled-input">
                <label>Summary <span className="not-recommended">not recommended</span></label>
                <textarea
                    value={personalInfo.summary}
                    placeholder="As a Principal Software Engineer, I excel in designing and developing robust and scalable software solutions..."
                    onChange={(e) => setPersonalInfo({...personalInfo, summary: e.target.value})}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default GeneralInfo
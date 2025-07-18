import "../styles/link.css"

const Link = ({ link, setLink }) => {
    
    return (       
            <div className="link-form-container">
                <div className="link-form">
                    <div className="links-header">
                        <div className="header-label">Platform</div>
                        <div className="header-url">URL</div>
                        <div className="header-text">Text</div>
                    </div>
                    
                    {/* Website */}
                    {/* <div className="link-row">
                        <label className="link-label">Website</label>
                        <input
                            type="url"
                            value={link.website}
                            placeholder="www.johndoe.com"
                            onChange={(e) => setLink({ ...link, website: e.target.value })}
                            className="link-input url-input"
                            />
                        <input
                            type="text"
                            value={link.websiteText}
                            placeholder="portfolio"
                            onChange={(e) => setLink({ ...link, websiteText: e.target.value })}
                            className="link-input text-input"
                            />
                    </div> */}
                    
                    {/* LinkedIn */}
                    <div className="link-row">
                        <label className="link-label">LinkedIn</label>
                        <input
                            type="url"
                            value={link.linkedin}
                            placeholder="www.linkedin.com/john doe"
                            onChange={(e) => setLink({ ...link, linkedin: e.target.value })}
                            className="link-input url-input"
                            />
                        <input
                            type="text"
                            value={link.linkedinText}
                            placeholder="LinkedIn"
                            onChange={(e) => setLink({ ...link, linkedinText: e.target.value })}
                            className="link-input text-input"
                            />
                    </div>
                    
                    {/* GitHub */}
                    <div className="link-row">
                        <label className="link-label">GitHub</label>
                        <input
                            type="url"
                            value={link.github}
                            placeholder="Github"
                            onChange={(e) => setLink({...link , github:e.target.value})}
                            className="link-input url-input"
                            />
                        <input
                            type="text"
                            value={link.githubText}
                            placeholder="github"
                            onChange={(e) => setLink({ ...link, githubText: e.target.value })}
                            className="link-input text-input"
                            />
                    </div>
                </div>
            </div>
    )
}

export default Link;
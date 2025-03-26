import {useState} from 'react';




const Certification = ({certification , setCertification}) =>{

    const [isOpen , setOpen] = useState(false)
    return (
        <div>
            <div className='form-container'>

            <div className='layout-btn-div'>
            <button onClick={ () => setOpen(!isOpen) } className='layout-btn'>
                 {isOpen ? "▲" :  " ▼  Certification & Skill Interest "}  </button> 
            </div>
                    <div className={`form ${isOpen ? "show" : "" }`}>
                            <textarea
                            value={certification.certificate}
                            placeholder='If you have any relevant ones; otherwise leave blank'
                            onChange={(e) => setCertification({...certification , certificate : e.target.value })}
                            />
                            <textarea
                            value={certification.skill}
                            placeholder='Strategic Planning, Problem Solving, Leadership, Teamwork, etc'
                            onChange={(e) => setCertification({...certification , skill: e.target.value })}
                            />
                            <textarea
                            value={certification.interest}
                            placeholder='Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football'
                            onChange={(e) => setCertification({...certification , interest : e.target.value })}
                            />
                    </div>
            </div>

        </div>
    )
}

export default Certification;
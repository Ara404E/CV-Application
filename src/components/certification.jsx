import {useState} from 'react';
import "../styles/certification.css"




const Certification = ({certification , setCertification}) =>{

    const [isOpen , setOpen] = useState(false)
    return (
            <div className='certificate-form-container'>
                    <div className={`certificate-form`}>
                        <label> Certificates </label>
                            <textarea
                            value={certification.certificate}
                            placeholder='If you have any relevant ones; otherwise leave blank'
                            onChange={(e) => setCertification({...certification , certificate : e.target.value })}
                            />
                            <label> Skills </label>
                            <textarea
                            value={certification.skill}
                            placeholder='Strategic Planning, Problem Solving, Leadership, Teamwork, etc'
                            onChange={(e) => setCertification({...certification , skill: e.target.value })}
                            />
                            <label>Interest</label>
                            <textarea
                            value={certification.interest}
                            placeholder='Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football'
                            onChange={(e) => setCertification({...certification , interest : e.target.value })}
                            />
                    </div>
            </div>
        
    )
}

export default Certification;
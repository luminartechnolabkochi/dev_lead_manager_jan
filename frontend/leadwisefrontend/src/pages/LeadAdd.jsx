import React, { useState } from 'react'

function LeadAdd() {

   let [lead,setLead]=useState({name:"",email:"",phone:"",course:"",status:"",source:"",remarks:""})

    function handleSubmit(event){
        event.preventDefault()
        console.log(lead);
        
    }

    const COURSE_CHOICES = [
        "Django",
        "MEARN_STACK",
        "JAVA",
        "SOFTWARE_TESTING",
        "ASP.net",
        "DATASCIENCE",
        "DIGITAL-MARKETING",
        "FLUTTER"
    ]

    const STATUS_CHOICES = [
        "New",
        "Contacted",
        "Interested",
        "Not Interested",
        "Joined",
    ]

    const SOURCE_CHOICES = [
        "Instagram",
        "Facebook",
        "Website",
        "WhatsApp",
        "Walk-in",
        "Referral",
        "Call",
    ]



    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">name</label>
                    <input 
                    onChange={e=>setLead({...lead,name:e.target.value})}
                    type="text" placeholder='enter name' />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input
                    onChange={e=>setLead({...lead,email:e.target.value})}
                    type="email" placeholder='enter email' />
                </div>
                <div>
                    <label htmlFor="">phone</label>
                    <input type="text" 
                    onChange={e=>setLead({...lead,phone:e.target.value})}
                    placeholder='enter phone number' />
                </div>
                <div>
                    <label htmlFor="">Select course</label>
                    <select name="" id="" 
                    onChange={e=>setLead({...lead,course:e.target.value})}
                    >
                        {COURSE_CHOICES.map((c) => (
                            <option value={c}>{c}</option>
                        ))}

                    </select>
                </div>

                <div>
                    <label htmlFor="">Select status</label>
                    <select name=""
                    onChange={e=>setLead({...lead,status:e.target.value})}
                    id="">
                        {STATUS_CHOICES.map((s) => (
                            <option value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="">select source</label>
                    <select name=""
                    onChange={e=>setLead({...lead,source:e.target.value})}
                    id="">
                        {SOURCE_CHOICES.map((s)=>(
                            <option value={s}>{s}</option>
                        ))}
                    </select>

                </div>

                <div>
                    <label htmlFor="">remarks</label>
                    <textarea
                    onChange={e=>setLead({...lead,remarks:e.target.value})}
                    name="" id=""></textarea>
                </div>

                <div>
                    <button type='submit'>Sumbmit</button>
                </div>

            </form>
        </div>
    )
}

export default LeadAdd

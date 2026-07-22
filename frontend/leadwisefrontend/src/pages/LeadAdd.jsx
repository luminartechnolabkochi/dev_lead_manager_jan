import React from 'react'

function LeadAdd() {

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
            <form action="">
                <div>
                    <label htmlFor="">name</label>
                    <input type="text" placeholder='enter name' />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='enter email' />
                </div>
                <div>
                    <label htmlFor="">phone</label>
                    <input type="text" placeholder='enter phone number' />
                </div>
                <div>
                    <label htmlFor="">Select course</label>
                    <select name="" id="">
                        {COURSE_CHOICES.map((c) => (
                            <option value={c}>{c}</option>
                        ))}

                    </select>
                </div>

                <div>
                    <label htmlFor="">Select status</label>
                    <select name="" id="">
                        {STATUS_CHOICES.map((s) => (
                            <option value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="">select source</label>
                    <select name="" id="">
                        {SOURCE_CHOICES.map((s)=>(
                            <option value={s}>{s}</option>
                        ))}
                    </select>

                </div>

                <div>
                    <label htmlFor="">remarks</label>
                    <textarea name="" id=""></textarea>
                </div>

                <div>
                    <button>Sumbmit</button>
                </div>

            </form>
        </div>
    )
}

export default LeadAdd

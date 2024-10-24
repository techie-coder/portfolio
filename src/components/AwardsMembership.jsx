import React from 'react'

const AwardsMembership = () => {
    const awards =[ 
    {
        "title": "First Place",
        "body": "National AI Hackathon,2023"
    },
    {
        "title": "Best Innovator Award",
        "body": "Startup India Initiative, 2024"
    },
    {
        "title": "Top 10 Developer",
        "body": "Google Code Jam, 2023"
    }
]
    const memberships = [
        {
            "title": "Member",
            "body": "Association for Computing Machinery(ACM) - 2023 to Present"
        },
        {
            "title": "Volunteer",
            "body": "Tech for Good NGO - 2022 to Present"
        }
    ]

    return (
        <div className="grid grid-cols-2 h-20vh" id="awards">
        <span className="space-y-10">
        <h1 className="ml-10 dela-gothic-one-regular text-blue text-5xl">Awards</h1>
        <div className="ml-10 p-3 h-2/3 w-max">
            <Card2 awards={awards} />
        </div>
        </span>
        <span className="space-y-10" id="membership">
        <h1 className="ml-10 dela-gothic-one-regular text-blue text-5xl">Memberships</h1>
        <div className="ml-10 p-3 h-2/3 w-2/3">
            <Card2 awards={memberships} />
        </div>
        </span>
        </div>
    )

}

export default AwardsMembership

const Card2 = ({awards}) => {
    return (
        <div className="bg-yellow w-full border-2 border-white">
            <ul className="p-3">
                {awards.map((item, index) => (
                <li key={index}><span className="dela-gothic-one-regular text-black text-xl">{item.title}</span><span className="poppins text-black text-xl"> - {item.body}</span></li>))}
            </ul>
        </div>
    )
}

import React from 'react'

const Education = () => {
    const Institutions = [
        {
            "title": "University Of Engineering and Management, Kolkata, India",
            "body": "B.Tech(CSE) - 2024 to 2028"
        },
        {
            "title": "National Gems H.S School, Kolkata, India",
            "body": "10+2 Level - 2010 to 2024"
        }
    ]

    return (
        <div className="h-30vh ml-10">
            <h1 className="dela-gothic-one-regular text-blue text-5xl">Education</h1>
            {Institutions.map((item, index) => (<Details key={index} title={item.title} body={item.body}/>))}
        </div>
    )
}

export default Education;

const Details = (props) => {
    const {title, body} = props
    return (
        <div className="mt-4 p-5">
        <h1 className="dela-gothic-one-regular text-yellow text-3xl">{title}</h1>
        <p className="poppins text-white text-2xl">{body}</p>
        </div>
    )
}

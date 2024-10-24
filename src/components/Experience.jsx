import React from 'react'
import Card from './Card'

const Experience = () => {
    const experience = {
        "title": "Hackathon Project, Smart India Hackathon",
        "subtitle": "August 2024",
        "body": [
             "Collaborated with a team to develop an AI-based disaster management system that provided real-time information and predictions for disaster scenarios",
            "Won first place for building a highly scalable and efficient solution using machine learning algorithms for risk assessment and resource allocation"
        ]
    }
    return (
        <div className="ml-10 space-y-8" id="experience">
            <h1 className="dela-gothic-one-regular text-blue text-5xl">Experience</h1>
            <div className="p-3 w-2/3">
            <Card
                title={experience.title}
                subtitle={experience.subtitle}
                body={experience.body}
                />
                </div>
        </div>
    )
}

export default Experience
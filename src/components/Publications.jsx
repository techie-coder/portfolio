import React from 'react'
import Card from './Card'

const Publications = () => {
    const publications = {
        "title": "Research Paper: AI-Driven CBT for Mental Health, Published in Journal of AI Research, 2024",
        "subtitle": "September 2024",
        "body": [
            "This paper explores the integration of AI with Cognitive Behavioral Therapy (CBT) to provide personalized mental health support. It includes mood analysis, response generation, and real-time feedback systems for improved mental well-being."
        ]
    }
    return (
        <div className="ml-10 space-y-8">
            <h1 className="dela-gothic-one-regular text-blue text-5xl">Publications</h1>
            <div className="p-3 w-2/3">
            <Card
                title={publications.title}
                subtitle={publications.subtitle}
                body={publications.body}
                />
                </div>
        </div>
    )
}

export default Publications
import React from 'react'
import Card from './Card'

const Projects = () => {
    const project1 = 
        {
            "title":"AI-Powered Mental Health Support Platform",
            "subtitle": "",
            "body": ["Developed an AI-driven mental health assistant using machine learning models and CBT frameworks to offer personalized counseling and real-time suggestions. Integrated with mobile (Android, iOS) and web platforms." ]
        }
    const project2 =
        {
            "title": "Geolocation-Based Attendance Tracking App",
            "subtitle": "",
            "body": ["Created a blockchain-secured attendance tracking app that leverages GPS and encryption for validating check-ins/check-outs, providing an immutable attendance record."]
        }
    const project3 = 
        {
            "title":"esCode",
            "subtitle": "",
            "body": ["Built a full stack web application mimicking LeetCode’s functionality using React, Node.js, and MongoDB to help users practice coding with various problem sets, leaderboards, and progress tracking."]
        }


    return (
        <div className="ml-10 space-y-10 w-80vw" id="projects">
            <h1 className="dela-gothic-one-regular text-blue text-5xl">Projects</h1>
            <div className="p-5 grid grid-cols-2 justify-center w-full gap-10">
                <span className="">
                    <Card title={project1.title} subtitle={project1.subtitle} body={project1.body} />
                </span>
                <span className="">
                    <Card title={project2.title} subtitle={project1.subtitle} body={project2.body} />
                </span>
            </div>
            <div className="grid grid-cols-2">
            <div className='w-1/2 col-span-2 flex justify-self-center items-center align-center pb-3'>
                <Card title={project3.title} subtitle={project1.subtitle} body={project3.body} />
            </div>
            </div>
        </div>
    )
    
}

export default Projects;
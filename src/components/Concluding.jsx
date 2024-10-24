import React from 'react'

const Concluding = () => {
    const details = [
        {
            "title": "Research Thrust Area",
            "body": ["Artificial Intelligence for Healthcare and Mental Health", 'Blockchain for Secure Data and Attendance Systems', 'Full Stack Web and Mobile Application Development', 'Cloud Infrastructure and DevOps']
        },
        {
            "title": "Events",
            "body": [
                "AI Innovation Hackathon - Organized 2024",
                "Workshop on Blockchain for Developers - Attended 2024",
                "National Conference on Emerging Technologies - Attended, 2024"
            ]
        }
    ]
    const card3 =
        {
            "title": "Poster/Paper Presentation",
            "body": [
                "Presented: AI in Mental Health Solutions, National AI Symposium, 2024", 
                "Overview: A presentation on how AI and machine learning can improve mental health care through scalable, personalized interventions"
            ]
        }
    const card4 =
        {
            "title": "Courses Completed",
            "body": ["Coursera - The Complete 2024 Web Development Bootcamp - 2024",
                "Linkedin Learning - Career Essentials in Generative AI by Microsoft and Linkedin"
            ]
        }
    const contact =
        {
            "title": "Contact Me",
            "body": [
                "Email - saswata24@example.com",
                "Github - github.com/techie-coder",
                "Linkedin - linkedin.com/in/saswatab20"
            ]
        }
    return (
        <>
        <div className="grid grid-cols-2 ml-10 p-5 gap-10">
            {details.map((item, index) => (
                <Card3 
                key={index}
                title={item.title}
                body={item.body}
                id={ item.title === "Events" ? "events" : "research"}
                /> 
            ))}
        <div className="col-span-2 justify-self-center w-1/2" id="posters">
            <Card3 title={card3.title} body={card3.body} />
        </div>
        <div className='h-20vh' id="courses">
        <Card3 title={card4.title} body={card4.body} />
        
        </div>
        <div className="mt-20 bg-yellow justify-end" id="contact">
            <Card3 title={contact.title} body={contact.body} />
        </div>
        </div>
        </>
    )

}

export default Concluding;

const Card3 = (props) => {
    const {title, body, id} = props
    return (
        <div className="bg-yellow border-2 border-white scale-100 hover:scale-105 transition ease-in-out" id={id}>
            <div className="p-3">
            <h1 className="dela-gothic-one-regular text-blue text-3xl mb-3">{title}</h1>
            <ul className="poppins text-black text-xl">
                {body.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            </div>
        </div>
    )
}
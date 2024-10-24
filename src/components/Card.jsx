import React from 'react'

const Card = (props) => {
    const {title, subtitle, body} = props
    return (
        <div className="bg-yellow w-full border-2 border-white scale-100 hover:scale-105 transition ease-in-out">
            <h1 className="p-3 dela-gothic-one-regular text-black text-3xl">{title}</h1>
            <h2 className="p-3 poppins text-black italic text-xl">{subtitle.length > 0 ? subtitle : ""}</h2>
            <p className="p-3 poppins text-black text-lg"><ul>{body.map((item, index) => (<li key={index}>{item}</li>))}</ul></p>
        </div>
    ) 
}

export default Card;
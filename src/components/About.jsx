import React from 'react'
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


const About = () => {

    const main = useRef(null)

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
    )

    return (
        <div ref={main} className="ml-10 h-30vh justify-end items-center">
            <h1 className="box pt-10 dela-gothic-one-regular text-blue text-5xl">About Me</h1>
            <p className="box pt-10 poppins text-white text-2xl w-2/3">I am Saswata, a passionate and dedicated full stack developer with a strong foundation in both front-end and back-end technologies. With expertise in languages such as JavaScript, C++, and frameworks like React and Node.js, I build dynamic, scalable web applications. My journey in software development has equipped me with a diverse skill set, including database management, API integration, and cloud computing.</p>
        </div>
    )
}

export default About;
import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import luffy from '../assets/luffy.svg'

const Hero = () => {

	const container = useRef(null);
	const boxContainer = useRef(null);
	const imgContainer = useRef(null);
	const listContainer = useRef(null)

	useGSAP(
		() => {
			gsap.from(container.current, { 
				opacity: -1.5,
				x: -100,
				duration: 2,
				ease: "power1.inOut"
			});

			gsap.from(imgContainer.current, {
				duration: 1,
				opacity: -3,
				x: 60,
				y: 60,
				rotate: -30,
				ease: "power1.inOut"
			})

			gsap.from(listContainer.current, {
				opacity: -1.5,
				duration: 2,
				ease: "power1.inOut"
			})

		},
		{ scope: container, imgContainer, listContainer }
	);
	

	const listItems = ['Home', 'About', 'Education', 'Experience', 'Publication', 'Awards', 'Projects', 'Membership', 'Research', 'Events', 'Posters', 'Courses','Contact']
	
	return (
		<div className="h-70vh min-w-screen grid grid-cols-2 justify-between items-center">
			<div ref={container} className="brand">
			<div className="p-3 m-3 align-center"><h1 className="dela-gothic-one-regular text-blue text-7xl">Saswata Biswas</h1>
			<p className="mt-3 ml-3 flex justify-start dela-gothic-one-regular text-white text-3xl">Full Stack Developer</p>
		</div></div>
		<div ref={boxContainer} className="ml-10 relative h-70vh">
		
			<div className="z-0 absolute h-full w-40vw m-10 p-5 border-2 border-white">
			</div>
			<div className="z-1 relative bg-yellow h-full w-40vw">
			<img ref={imgContainer} src={luffy} alt="luffy" className='absolute z-0 h-17/20 mt-16 ml-11'></img>
			<div className="pt-10 pl-3">
			<ul ref={listContainer} className="dela-gothic-one-regular text-lg relative z-10">
			{listItems.map((item, index) => (<li key={index}><a href={"#"+item.toLowerCase()}>{item}</a></li>))}
			
			</ul>
			
			</div>
			</div>
		</div>
		</div>
	)
}

export default Hero;

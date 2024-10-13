import React from 'react';

const Hero = () => {
	const listItems = ['Home', 'About', 'Education', 'Experience', 'Publication', 'Awards', 'Projects', 'Membership', 'Research', 'Events', 'Posters', 'Courses','Contact']
	
	return (
		<div className="h-70vh min-w-screen grid grid-cols-2 justify-between items-center">
			<div className="p-3 m-3 align-center"><h1 className="dela-gothic-one-regular text-blue text-7xl">Saswata Biswas</h1>
			<p className="mt-3 ml-3 flex justify-start dela-gothic-one-regular text-white text-3xl">Full Stack Developer</p>
		</div>
		<div className="ml-10 relative h-70vh">
			<div className="z-0 absolute h-full w-40vw m-10 p-5 border-2 border-white">
			</div>
			<div className="z-1 relative bg-yellow h-full w-40vw">
			<div className="pt-10 pl-3">
			<ul className="dela-gothic-one-regular text-lg">
			{listItems.map((item, index) => (<li key={index}><a href="#">{item}</a></li>))}
			</ul>
			</div>
			</div>
		</div>
		</div>
	)
}

export default Hero;

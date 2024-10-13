import React from 'react';

const NavBar = () => {
	return (
		<nav className="min-h-28 flex justify-between items-center text-white">
		<div className="p-5 m-3 ml-10 dela-gothic-one-regular text-3xl">My Portfolio</div>
		<div className="p-3 m-3 flex justify-end items-center align-center text-poppins-regular text-xl">
		<a className="p-3 m-3" href='#'>Home</a>
		<a className="p-3 m-3" href='#'>Works</a>
		<a className="p-3 m-3" href='#'>Contact</a>
		</div>
		</nav>
	)
}

export default NavBar

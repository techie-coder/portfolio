import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education'
import Experience from './components/Experience';
import Publications from './components/Publications';
import AwardsMembership from './components/AwardsMembership';
import Projects from './components/Projects';
import Teaser from './components/Teaser';
import Concluding from './components/Concluding'
import './index.css'




const App = () => {

	return (
		<>
		<NavBar />
		<div className="space-y-24">
		<Hero />
		<About />
		<Education />
		<Experience />
		<Publications />
		<AwardsMembership />
		<Projects />
		<Teaser />
		<Concluding />
		</div>
		</>
	)
}

export default App

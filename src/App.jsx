import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import AwardsMembership from './components/AwardsMembership';
import Projects from './components/Projects';
import Teaser from './components/Teaser';
import Concluding from './components/Concluding';
import './index.css';
import { useState, useEffect, useRef } from 'react';
import useLocoScroll from './hooks/useLocoScroll';

const App = () => {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);

  useLocoScroll(!preloader);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
	  //console.log(timer)
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => {
      window.clearInterval(id.current);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <div className="absolute h-screen w-screen bg-black flex flex-col justify-center items-center gap-5">
          <h1 className="dela-gothic-one-regular text-3xl text-white">Saswata Biswas</h1>
          <h2 className="dela-gothic-one-regular text-2xl text-white">My Portfolio</h2>
        </div>
      ) : (
        <div id="main-container" data-scroll-container>
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
        </div>
      )}
    </>
  );
};

export default App;
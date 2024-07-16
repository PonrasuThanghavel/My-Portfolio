import React, { useState, useEffect } from 'react';
import './css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import myImage from '../assets/images/ponrasu.jpg'; 
import resume from '../assets/pdf/resume.pdf'; 

const designations = [
  "Computer Science Engineer",
  "Machine Learning Engineer",
  "Data Engineer",
  "AI Enthusiast"
];

const Home = () => {
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (subIndex < designations[index].length) {
        setCurrentDesignation((prev) => prev + designations[index][subIndex]);
        setSubIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentDesignation("");
          setSubIndex(0);
          setIndex((prev) => (prev + 1) % designations.length);
        }, 2000);
      }
    }, subIndex === designations[index].length ? 2000 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="home" id="home">
      <div className="image-container">
        <img className="my-image" src={myImage} alt="Ponrasu Thangavel" />
      </div>
      <div className="text-container">
        <h1>Hello,</h1>
        <h2>I'm Ponrasu Thangavel</h2>
        <h3>{currentDesignation}<span className="cursor">{blink ? "|" : " "}</span></h3>
        <div className="buttons-container">
          <a href={resume} download="Ponrasu_Thangavel_Resume.pdf" className="resume-button">Download Resume</a>
          <a href="https://drive.google.com/file/d/15nsB-_Ikfsuz_JR9MtWqqk5-i756USMW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="gdrive-link">
            <FontAwesomeIcon icon={faLink} style={{ color: "#74C0FC" }} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

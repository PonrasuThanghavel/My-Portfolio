import React, { useState, useEffect } from 'react';
import './css/home.css';
import myImage from '../assets/images/ponrasu.jpg'; // Importing the image

const designations = [
  "Computer Science Engineer",
  "Machine learning Engineer",
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
      </div>
    </section>
  );
}

export default Home;

import React from 'react';
import './css/home.css';
import myImage from '../assets/images/ponrasu.jpg'; // Importing the image

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="image-container">
        <img className="my-image" src={myImage} alt="Ponrasu Thangavel" />
      </div>
      <div className="text-container">
        <h1>Hello,</h1>
        <h2>I'm Ponrasu Thangavel</h2>
        <h3>Computer Science Engineer</h3>
        <p>Dedicated and passionate Computer Science Engineer with a strong foundation in Machine Learning and Data Engineering. With a Bachelor of Engineering from Bannari Amman Institute of Technology, I am equipped with comprehensive skills in languages like C, CPP, and Python, along with proficiency in Numpy, Pandas, Matplotlib, and SQL.</p>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './css/home.css';
import myImage from '../assets/images/ponrasu.jpg'; // Importing the image

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="image-container">
        <img className="my-image" src={myImage} alt="Ponrasu Thangavel" />
      </div>
      <div className="text-container">
        <h1>Hello,</h1>
        <h2>I'm Ponrasu Thangavel</h2>
        <h3>Data Engineer/ML Engineer</h3>
      </div>
    </section>
  );
}

export default Home;

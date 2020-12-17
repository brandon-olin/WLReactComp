import React from 'react';
import Drone from '../images/Drone.png';
import Shadow from '../images/Shadow.png';

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <img src={Drone} alt="drone" id="HeroImage" />
      <img src={Shadow} alt="shadow" id="HeroImageShadow" />
      <h1>F-210</h1>
      <h4>"THE FASTEST DRONE ON THE PLANET"</h4>
      <p>-The Wirecutter</p>
    </div>
  )
};

export default HeroSection;
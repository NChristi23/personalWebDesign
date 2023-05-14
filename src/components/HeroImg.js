import "./HeroImgStyles.css";

import React, { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";

import IntroImg from "../assets/myworkbench1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="hero">
      <div className="mask">
        {/* <img className="intro-img" src={IntroImg} alt="images" /> */}
        <div className="intro-img">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
          />
        </div>
      </div>
      <div className="content">
        <h1>BEYOND BOUNDARIES.</h1>
        <p>Breaking Barriers and Pushing the Limits of Imagination.</p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

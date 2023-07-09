import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import welcomeimage from '../../images/welcomeimage.jpeg';

const Welcome = () => {
  return (
    <div className="main__home">
       <div className="main__home_image__container">
      <img className="main__home_image" src={welcomeimage} alt="alt" />
       </div>

      <div className="main__home_info">
        <span className="main__home_info__title">
          EMPOWERING TODAY'S YOUTH
        </span>
        <button className="button" to="/">
                Donate
              </button>
      </div>
    </div>
  );
};

export default Welcome;

import React from 'react';
import '../styles/LandingInfoSection.css';
import info1 from "../images/info1.svg";
import info2 from "../images/info2.svg";
import info3 from "../images/info3.svg";

const LandingInfoSection = () => {
  return (
    <div className="info-sections">

      <div className="info-block">
        <div className="info-content">
          <h2 className="info-heading">Fullstack Inclusion</h2>
          <p className="info-text">
            Fullstack Academy helps make your dream career possible, no matter your background or skill level.
            We’re committed to providing a welcoming and inclusive learning environment. Our live online, part-time,
            and full-time programs give you the flexibility to succeed.
          </p>
        </div>
        <div className="info-image">
          <img src={info1} alt="Fullstack Inclusion" />
        </div>
      </div>

      <div className="info-block reverse">
        <div className="info-content">
          <h2 className="info-heading">Fullstack Experience</h2>
          <p className="info-text">
            With passionate instructors and a career success team to assist with everything from interview prep to
            salary negotiations, you’ll gain the confidence you need to build a fulfilling career.
          </p>
        </div>
        <div className="info-image">
          <img src={info2} alt="Fullstack Experience" />
        </div>
      </div>

      <div className="info-block">
        <div className="info-content">
          <h2 className="info-heading">Fullstack Outcomes</h2>
          <p className="info-text">
            We’re obsessed with helping our students succeed, and it shows: 1,500+ companies nationwide are eager
            to hire our graduates—including Fullstack Academy <span className="highlight-link">Hiring Partners</span> like
            Bloomberg, Spotify, and Etsy.
          </p>
        </div>
        <div className="info-image">
          <img src={info3} alt="Fullstack Outcomes" />
        </div>
      </div>

    </div>
  );
};

export default LandingInfoSection;

import React from 'react';
import '../styles/LandingstatsSection.css';
import boot1 from "../images/boot1.webp"
import boot2 from "../images/boot2.webp"
import boot3 from "../images/boot3.webp"
import boot4 from "../images/boot3.webp"
import boot5 from "../images/boot5.webp"

const LandingStatsSection = () => {
  return (
    <div className="stats-section">
      <h2 className="subheading1">The Fullstack Difference</h2>
      <h2 className="main-heading">
        Fullstack Academy is a trusted trailblazer <span className="highlighted">in</span> tech education.
      </h2>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>3.8 <span className="mini-text">MILLION</span></h3>
          <p>TECH JOB OPENINGS BY 2032<br />(BLS.GOV)</p>
        </div>
        <div className="stat-box">
          <h3>4.8 <span className="star">★</span></h3>
          <p>STUDENT STAR RATING</p>
        </div>
        <div className="stat-box">
          <h3>10,000+</h3>
          <p>SUCCESSFUL ALUMNI AND COUNTING</p>
        </div>
        <div className="stat-box">
          <h3>$90,000</h3>
          <p>AVG. SALARY AMONG 2021 WEB DEV GRADS</p>
        </div>
      </div>

      <div className="badges-row">
        <img src={boot1} alt="Best Coding Bootcamp 2025" />
        <img src={boot2} alt="Best Online Bootcamp 2024" />
        <img src={boot3} alt="Best Cybersecurity Bootcamp 2024" />
        <img src={boot4} alt="Best Part-Time Bootcamp 2024" />
        <img src={boot5} alt="Best Bootcamps 2023" />
      </div>
    </div>
  );
};

export default LandingStatsSection;

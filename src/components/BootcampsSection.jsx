import React from "react";
import "../styles/BootcampsSection.css";
import camp1 from "../images/camp1.webp"
import camp2 from "../images/camp2.webp"
import camp3 from "../images/camp3.webp"
import camp4 from "../images/camp4.webp"
import camp5 from "../images/camp5.webp"

const bootcamps = [
  {
    title: "Full-Time Coding Bootcamp",
    tags: ["Online", "Full-Time"],
    image: camp1,
    button: "LEARN CODING FULL-TIME",
  },
  {
    title: "Part-Time Coding Bootcamp",
    tags: ["Online", "Part-Time"],
    image: camp2,
    button: "LEARN CODING PART-TIME",
  },
  {
    title: "AI & Machine Learning Bootcamp",
    tags: ["Online", "Part-Time"],
    image: camp3,
    button: "LEARN AI & MACHINE LEARNING",
  },
  {
    title: "Cybersecurity Bootcamp",
    tags: ["Online", "Full-Time", "Part-Time"],
    image: camp4,
    button: "LEARN CYBERSECURITY",
  },
  {
    title: "Data Analytics Bootcamp",
    tags: ["Online", "Full-Time", "Part-Time"],
    image: camp5,
    button: "LEARN DATA ANALYTICS",
  },
];

const BootcampsSection = () => {
  return (
    <div className="bootcamp-section">
        <h3 className="section-title1">Fullstack Academy</h3>
      <h3 className="section-title">Our bootcamps prepare you to succeed in tech and beyond.</h3>
      
      <div className="bootcamp-grid">
        {bootcamps.map((camp, idx) => (
          <div className="bootcamp-card" key={idx}>
            <div className="bootcamp-img" style={{ backgroundImage: `url(${camp.image})` }}>
              <div className="category-label">CODING</div>
            </div>
            <div className="bootcamp-content">
              <h4>{camp.title}</h4>
              <div className="tag-container">
                {camp.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <button className="bootcamp-button">{camp.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampsSection;

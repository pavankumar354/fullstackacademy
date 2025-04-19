import React from "react";
import "../styles/InspirationSection.css";
import img1 from "../images/inspi1.webp";
import img2 from "../images/inspi2.webp";
import img3 from "../images/inspi3.webp";

const stories = [
  {
    img: img1,
    title: "Software Developer Career Path",
    description:
      "This article details a career path roadmap and education options for prospective software developers.",
    link: "https://www.fullstackacademy.com/blog/software-developer-career-path",
  },
  {
    img: img2,
    title: "From YouTube and E-Commerce to an AI Software Engineer Career",
    description:
      "Discover how one bootcamp graduate’s experience in coding bootcamp and former roles led her to a career in AI Software Engineering.",
    link: "https://www.fullstackacademy.com/blog/ai-software-engineer-career",
  },
  {
    img: img3,
    title: "What is Information Security? A Comprehensive Guide for Beginners",
    description:
      "Explore the core principles of information security in our detailed guide. Learn practical applications and safeguarding data.",
    link: "https://www.fullstackacademy.com/blog/what-is-information-security",
  },
];

const InspirationSection = () => {
  return (
    <div className="inspiration-wrapper">
        <h3 className="subheading11">Why Fullstack Academy?</h3>
      <h2 className="heading">Take your future into your own hands and discover your potential.</h2>
      <h3 className="subheading">Get Inspired</h3>
      <div className="card-grid">
        {stories.map((story, index) => (
          <a className="story-card" href={story.link} key={index} target="_blank" rel="noopener noreferrer">
            <img src={story.img} alt={story.title} />
            <div className="card-content">
              <h4>{story.title}</h4>
              <p>{story.description}</p>
            </div>
          </a>
        ))}
      </div>
      <button className="story-button">MORE STORIES</button>
    </div>
  );
};

export default InspirationSection;

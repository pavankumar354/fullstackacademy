import React, { useState } from "react";
import "../styles/TestimonialSection.css";
import user1 from "../images/review1.webp";
import user2 from "../images/review2.webp";
import user3 from "../images/review3.png";
import user4 from "../images/review3.png";
import user5 from "../images/review3.png";
import user6 from "../images/review3.png";
import tickIcon from "../images/check.svg";

const allTestimonials = [
  {
    img: user1,
    quote:
      "To anyone facing challenges, my advice is simple: Stay focused and keep forging ahead, your breakthrough will arrive.",
    name: "ALFREDO FERREIRA, SOFTWARE ENGINEER I @ NORTHWESTERN MUTUAL",
  },
  {
    img: user2,
    quote:
      "The hands-on simulations and team projects allowed me to apply my knowledge in many different aspects. It was like a revelation to myself that I can do this, and be successful.",
    name: "TYLER BLOCKER, TECHNICAL SUPPORT SPECIALIST @ CAPITAL ONE",
  },
  {
    img: user3,
    quote:
      "I had been learning general programming for a while before bootcamp, and felt a lot of clarity once I started learning exact concepts and how everything fit together.",
    name: "GREG KURKA, CODING BOOTCAMP GRADUATE",
  },
  {
    img: user4,
    quote:
      "The experience gave me confidence in my skills and taught me how to work effectively with a team.",
    name: "JANE DOE, SOFTWARE DEVELOPER @ AMAZON",
  },
  {
    img: user5,
    quote:
      "I landed my first developer job just weeks after graduation thanks to the career support team.",
    name: "MARK SMITH, FULL-STACK DEVELOPER @ GOOGLE",
  },
  {
    img: user6,
    quote:
      "The instructors were amazing and the projects were very practical for real-world job readiness.",
    name: "EMILY JOHNSON, FRONTEND ENGINEER @ MICROSOFT",
  },
];

const TestimonialSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount=3
  const getVisibleTestimonials = () => {
    const end = startIndex + visibleCount;
    if (end <= allTestimonials.length) {
      return allTestimonials.slice(startIndex, end);
    } else {
      // wrap around
      return [
        ...allTestimonials.slice(startIndex),
        ...allTestimonials.slice(0, end - allTestimonials.length),
      ];
    }
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % allTestimonials.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length
    );
  };

  const visibleTestimonials = getVisibleTestimonials();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
 

  return (
    <section className="testimonial-section">
      {/* Top row with left and right section */}
      <div className="testimonial-top">
        <div className="testimonial-left">
          <h2>
            See yourself in tech and more with unyielding support through every
            step of your Fullstack Academy journey.
          </h2>
        </div>

        <div className="testimonial-right">
          <ul>
            <li>
              <div><img src={tickIcon} alt="tick" className="check-icon" /></div>
              <div>Choose a schedule that works for you and fits your life with full-time and part-time online options.</div>
            </li>
            <li>
              <div><img src={tickIcon} alt="tick" className="check-icon" /></div>
              <div>Learn the skills employers want from leading industry experts.</div>
            </li>
            <li>
              <div><img src={tickIcon} alt="tick" className="check-icon" /></div>
              <div>Get hired by top-tier companies with support from career coaches.</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="testimonial-cards">
        {visibleTestimonials.map((t, index) => (
          <div className="testimonial-card" key={startIndex + index}>
            <div className="testimonial-avatar">
              <img src={t.img} alt={`Testimonial ${startIndex + index}`} />
              <span className="slider-icon">↔</span>
            </div>
            <p className="quote">“{t.quote}”</p>
            <p className="name">{t.name}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
  <button onClick={handlePrev} className="slider-arrow">←</button>
  <button onClick={handleNext} className="slider-arrow">→</button>
</div>


      {/* Full Width Button */}
      <div className="testimonial-button-wrapper">
        <button className="reviews-button">MORE STUDENT REVIEWS</button>
      </div>
    </section>
  );
};

export default TestimonialSection;

import React, { useState } from "react";
import axios from "axios";
import "../styles/Landing.css";
import amazon from "../images/amazon.svg";
import facebook from "../images/facebook.svg";
import google from "../images/google.svg";
import land1 from "../images/land1.svg";
import land2 from "../images/land2.svg";
import land3 from "../images/land3.svg";
import land4 from "../images/land4.svg";

function Landing() {
  const [inquireFor, setInquireFor] = useState("Myself");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/saveLandingForm", {
        inquireFor,
        subject,
      });
      alert("Form submitted successfully");
      setInquireFor("Myself");
      setSubject("");
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Submission failed");
    }
  };

  return (
    <div className="landing">
      <div className="left-section">
        <h1>Make Your Move.</h1>
        <p>
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </span>{" "}
          4.8/5 student rating
        </p>
        <ul className="features-list">
          <li className="features-list1"><img src={land1} alt="check" /> Tech bootcamp leader since 2012</li>
          <li className="features-list1"><img src={land2} alt="check" /> Immersive, live online instruction</li>
          <li className="features-list1"><img src={land3} alt="check" /> 1-on-1 career coaching</li>
          <li className="features-list1"><img src={land4} alt="check" /> 1,500+ companies hire our grads</li>
        </ul>
        <div className="brands">
          <img src={google} alt="Google" />
          <img src={amazon} alt="Amazon" />
          <img src={facebook} alt="Facebook" />
        </div>
      </div>

      <div className="right-section">
        <div className="info-box">
          <h2>Ready to take your next step? Get more info.</h2>
          <form className="form1" onSubmit={handleSubmit}>
            <label>
              Inquiring for:
              <input
                type="radio"
                name="inquire"
                value="Myself"
                checked={inquireFor === "Myself"}
                onChange={(e) => setInquireFor(e.target.value)}
              />{" "}
              Myself
              <input
                type="radio"
                name="inquire"
                value="My Company"
                checked={inquireFor === "My Company"}
                onChange={(e) => setInquireFor(e.target.value)}
              />{" "}
              My Company
            </label>

            <label className="options">
              Select your subject:
              <select
                className="option1"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option>Please select...</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </label>

            <button type="submit">Get More Info</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
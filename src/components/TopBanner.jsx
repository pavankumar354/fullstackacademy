import React, { useState, useEffect } from "react";
import "../styles/TopBanner.css"; // We'll add this CSS next

const TopBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const deadline = new Date("2025-04-30T23:59:59");
    const now = new Date();
    const diff = deadline - now;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="top-banner">
      <div className="timer">
        <div>{String(timeLeft.days).padStart(2, "0")} <span>Days</span></div>
        <div>{String(timeLeft.hours).padStart(2, "0")} <span>Hours</span></div>
        <div>{String(timeLeft.minutes).padStart(2, "0")} <span>Minutes</span></div>
        <div>{String(timeLeft.seconds).padStart(2, "0")} <span>Seconds</span></div>
      </div>
      <div className="message">
        <span>🎉 Spring Forward Discount! Save $3,000 on tuition when you enroll in our next select cohorts by 4/30/25.</span>
       </div>
      <div className="message1">
        
        <button className="cta-button">Secure Your $3,000 Discount</button>
      </div>
      <button className="close-button" onClick={() => setShowBanner(false)}>✕</button>
    </div>
  );
};

export default TopBanner;

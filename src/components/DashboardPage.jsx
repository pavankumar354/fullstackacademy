
import React from "react";
import "../styles/DashboardPage.css";
import BootcampsSection from "./BootcampsSection";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  
  const user = JSON.parse(localStorage.getItem("user"));

  

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <p>Hello {user?.firstName || "User"}! You have successfully logged in.</p>

      

      <div className="dashboard-content">
        <h2>📚 Your Courses</h2>
        <BootcampsSection />
      </div>
    </div>
  );
};

export default DashboardPage;

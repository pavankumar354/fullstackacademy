// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage";
import DashboardPage from "./components/DashboardPage"
import ProtectedRoute from './components/ProtectedRoute';
import TopBanner from "./components/TopBanner"; 
import './App.css';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails1';

function App() {
  return (
    <Router>
      <TopBanner/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

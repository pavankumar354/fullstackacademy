import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Courses.css';
import bannerImage from '../images/inspi1.webp';
import analytics from "../images/inspi1.webp";
import science from "../images/inspi1.webp";
import ai from "../images/inspi1.webp";
import devops from "../images/inspi1.webp";
  
  const CourseCard = ({ image, title, rating, lessons, time, instructor, onCurriculumClick }) => (
    <div className="coursepage-course-card">
      <div className="coursepage-course-image-container">
        <img src={image} alt={title} className="coursepage-course-image" />
        <div className="coursepage-course-rating">
          <i className="fas fa-star"></i> {rating}
        </div>
      </div>
      <div className="coursepage-course-details">
        <h3 className="coursepage-course-title">{title}</h3>
        <div className="coursepage-course-meta">
          <span><i className="fas fa-book icon"></i> {lessons} lessons</span>
          <span><i className="fas fa-clock icon"></i> {time}</span>
        </div>
        <div className="coursepage-course-footer">
          <div className="coursepage-instructor">
            <img src={instructor.avatar} alt={instructor.name} className="coursepage-instructor-img" />
            <span>{instructor.name}</span>
          </div>
          <button className="coursepage-btn" onClick={onCurriculumClick}>
            Curriculum
          </button>
        </div>
      </div>
    </div>
  );
  
  const Courses = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
  
    const courses = [
      {
        id: 1,
        image: science,
        title: "Complete Digital Marketing Mastery Course",
        rating: "4.6",
        lessons: 40,
        time: "4h 30m",
        instructor: { name: "Eleanor Pena", avatar: "https://i.pravatar.cc/150?img=12" },
      },
      {
        id: 2,
        image: analytics,
        title: "Entrepreneurship & Business Growth Strategies Course",
        rating: "4.6",
        lessons: 47,
        time: "11h 30m",
        instructor: { name: "Guy Hawkins", avatar: "https://i.pravatar.cc/150?img=13" },
      },
      {
        id: 3,
        image: ai,
        title: "Full-Stack Web Development Bootcamp Program",
        rating: "4.9",
        lessons: 32,
        time: "5h 00m",
        instructor: { name: "Leslie Alexander", avatar: "https://i.pravatar.cc/150?img=14" },
      },
      {
        id: 4,
        title: "Full Stack Engineer",
        image: analytics,
        rating: "4.9",
        lessons: 32,
        time: "5h 00m",
        instructor: { name: "Leslie Alexander", avatar: "https://i.pravatar.cc/150?img=14" },
      },
      {
        id: 5,
        title: "DevOps Engineer",
        image: devops,
        rating: "4.9",
        lessons: 32,
        time: "5h 00m",
        instructor: { name: "Leslie Alexander", avatar: "https://i.pravatar.cc/150?img=14" },
      },
      {
        id: 6,
        title: "AI/ML/DL/Gen-AI Engineer",
        image: ai,
        rating: "4.9",
        lessons: 32,
        time: "5h 00m",
        instructor: { name: "Leslie Alexander", avatar: "https://i.pravatar.cc/150?img=14" },
      },
    ];
  
    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleCurriculumClick = (courseId) => {
      navigate(`/courses/${courseId}`);
    };
  
    return (
      <div className="coursepage-courses-page">
        <div
          className="coursepage-courses-banner"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <h1>Our Courses</h1>
        </div>
  
        <div className="coursepage-courses-section">
          <div className="coursepage-courses-search-bar">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>🔍</button>
          </div>
  
          <div className="coursepage-card-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  onCurriculumClick={() => handleCurriculumClick(course.id)}
                />
              ))
            ) : (
              <p>No courses found for "{searchQuery}".</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses; 
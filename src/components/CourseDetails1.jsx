import React from 'react';
import { useParams } from 'react-router-dom';
import courseData from './CourseData';
import '../styles/CourseDetails1.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) return <p style={{ textAlign: 'center' }}>Course not found</p>;

  return (
    <div className="coursedetails1">
      <div className="coursedetails1-header">
        <h1>{course.title}</h1>
        <div className="coursedetails1-meta">
          <span className="stars">{course.rating}</span>
          <span>{course.students} Students</span>
          <span className="instructor">
            <img src={course.instructor.avatar} alt={course.instructor.name} />
            {course.instructor.name}
          </span>
        </div>
      </div>

      <div className="coursedetails1-main">
        <div className="coursedetails1-left">
          <img src={course.image} alt="Course" className="coursedetails1-main-image" />

          <section>
            <h2>About The Course</h2>
            <p>{course.about}</p>
          </section>

          <section>
            <h2>You Will Be Able To Know:</h2>
            <p>{course.objectivesIntro}</p>
            <ul>{course.objectives.map((obj, idx) => <li key={idx}>{obj}</li>)}</ul>
          </section>

          <section>
            <h2>Prerequisite:</h2>
            <ul>{course.prerequisites.map((pre, idx) => <li key={idx}>{pre}</li>)}</ul>
          </section>

          <section>
            <h2>Curriculum</h2>
            <ul>
  {course.curriculum.map((item, idx) => {
    const [title, ...rest] = item.split(':');
    const content = rest.join(':');
    return (
      <li key={idx}>
        <strong>{title}:</strong> {content}
      </li>
    );
  })}
</ul>

          </section>

          <section>
            <h2>Who Is This Course For?</h2>
            <ul>{course.audience.map((aud, idx) => <li key={idx}>{aud}</li>)}</ul>
          </section>
        </div>

        <div className="coursedetails1-right">
          <div className="coursedetails1-price-card">
            <h3>{course.category}</h3>
            <h1>{course.price}</h1>
            <hr />
            <ul className="coursedetails1-feature-list">
              {course.features.map((feat, idx) => (
                <li key={idx}>
                  <i className={`fas ${feat.icon}`}></i>
                  <span>{feat.text}</span>
                </li>
              ))}
            </ul>
            <button className="coursedetails1-book-button">Book a Course</button>
          </div>
        </div>
      </div>

      <div className="coursedetails1-cta-box">
        <h2>Take The First Step – Start Learning Today!</h2>
        <button className="coursedetails1-cta-button">Contact Us</button>
      </div>
    </div>
  );
};

export default CourseDetails;

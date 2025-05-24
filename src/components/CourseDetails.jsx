import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetails.css';
import sampleBanner from '../images/inspi1.webp';

const coursesData = {
  1: {
    title: "Complete Digital Marketing Mastery Course",
    overview: `
      <div class="overview-section">
        <h3 class="section-title">About The Course</h3>
        <p>
          This course dives deep into advanced digital marketing strategies to help businesses and individuals
          maximize their online presence. You’ll learn proven techniques in SEO, social media marketing, paid
          advertising, email automation, and conversion optimization. Through real-world case studies and hands-on
          exercises, you’ll gain the skills needed to create successful marketing campaigns that drive traffic,
          engagement, and revenue.
        </p>

        <h3 class="sub-section-title">You Will Be Able To Know:</h3>
        <p>
          By the end of this course, you will have a solid understanding of key concepts and practical skills that you
          can apply immediately. You will be able to confidently implement strategies, use industry tools, and solve
          real-world problems with ease.
        </p>
        <ul>
          <li>How to optimize websites for search engines (SEO) and improve rankings</li>
          <li>The secrets of successful social media marketing and paid advertising</li>
          <li>Effective email marketing automation to nurture leads and boost conversions</li>
          <li>How to analyze marketing data and optimize campaigns for maximum ROI</li>
        </ul>

        <h3 class="sub-section-title">Prerequisite:</h3>
        <ul>
          <li>Basic understanding of digital marketing concepts is helpful but not required</li>
          <li>Familiarity with social media platforms (Facebook, Instagram, LinkedIn, etc.)</li>
          <li>No prior coding or technical skills are necessary</li>
        </ul>

        <h3 class="sub-section-title">Who Is This Course For?</h3>
        <ul>
          <li>Entrepreneurs and business owners looking to grow their brands online</li>
          <li>Marketing professionals wanting to enhance their digital skills</li>
          <li>Freelancers and content creators who want to generate more engagement and leads</li>
        </ul>
      </div>
    `,
    curriculum: "Module 1: Basics of Digital Marketing, Module 2: SEO, Module 3: Social Media Marketing...",
    instructor: { name: "Eleanor Pena", bio: "Expert in digital marketing with 10+ years of experience..." },
    faqs: [
      { question: "What is the duration of this course?", answer: "The course lasts 4 weeks." },
      { question: "Is prior experience needed?", answer: "No, beginners are welcome!" },
    ],
    priceCard: {
      category: "Business",
      price: "$42.00 USD",
      features: [
        "22 hours on-demand video",
        "19 coding exercises",
        "15 articles",
        "Downloadable Files: 15",
        "Certificate of completion",
      ],
    },
  },
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = coursesData[courseId];

  const [activeTab, setActiveTab] = React.useState('overview');

  if (!course) return <p>Course not found</p>;

  return (
    <div className="course-details-page">
      <div
        className="course-banner"
        style={{ backgroundImage: `url(${sampleBanner})` }}
      >
        <h1>{course.title}</h1>
      </div>

      <div className="course-content">
        <div className="course-left">
          <div className="tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={activeTab === 'overview' ? 'active' : ''}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={activeTab === 'curriculum' ? 'active' : ''}
            >
              Curriculum
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={activeTab === 'instructor' ? 'active' : ''}
            >
              Instructor
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={activeTab === 'faqs' ? 'active' : ''}
            >
              FAQs
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div dangerouslySetInnerHTML={{ __html: course.overview }} />
            )}
            {activeTab === 'curriculum' && <p>{course.curriculum}</p>}
            {activeTab === 'instructor' && (
              <div>
                <h3>{course.instructor.name}</h3>
                <p>{course.instructor.bio}</p>
              </div>
            )}
            {activeTab === 'faqs' && (
              <ul>
                {course.faqs.map((faq, index) => (
                  <li key={index}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="course-right">
          <div className="price-card">
            <h3>{course.priceCard.category}</h3>
            <h1>{course.priceCard.price}</h1>
            <hr />
            <ul>
              {course.priceCard.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="book-button">Book a Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

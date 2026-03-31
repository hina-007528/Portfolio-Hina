import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mern Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed responsive web applications using HTML, CSS, JavaScript,
              and React. Managed backend services using Node.js and Express,
              ensuring security with JWT and OAuth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Musa Softs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built modern web applications using React 18, TypeScript, and
              Next.js. Integrated REST APIs and React Query, while reducing
              runtime errors by 20% using TypeScript.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>.Net Core Developer</h4>
                <h5>Musa Softs</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing and maintaining scalable web applications using .NET
              Core and Entity Framework. Designing RESTful APIs and optimizing
              application performance for high availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

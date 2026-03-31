import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Happinest",
    category: "Healthcare App",
    tools: "Next.js, .NET Core, PostgreSQL",
    image: "/images/happi.png",
    link: "https://dev.happinestapp.com/",
  },
  {
    title: "Photo Gallery",
    category: "Photography & Personal",
    tools: "GSAP, React, Three.js",
    image: "/images/world.png",
    link: "https://template01.photo-gallery.net/",
  },
  {
    title: "Pet Care",
    category: "Pet Platform",
    tools: "Next.js",
    image: "/images/Pet.png",
    link: "https://pet-site1.netlify.app/",
  },
  {
    title: "Sopify Music",
    category: "Music Player",
    tools: "JavaScript, DOM, CSS, HTML",
    image: "/images/Sopify.png",
    link: "https://music-0-0.netlify.app/",
  },
  {
    title: "Fitness Tracker",
    category: "Fitness & Wellness",
    tools: "MERN Stack, MongoDB Atlas",
    image: "/images/Fitness.png",
    link: "https://fanciful-pika-5e9172.netlify.app/",
  },
  {
    title: "Food Delivery",
    category: "E-Commerce (Admin Dashboard)",
    tools: "MERN Stack, MongoDB Atlas",
    image: "/images/FoodDelivery.png",
    link: "https://food-delivery07.netlify.app/",
  },
  {
    title: "E-Commerce",
    category: "Retail Store",
    tools: "MERN Stack, MongoDB Atlas",
    image: "/images/Ecommerce.png",
    link: "https://hina-ecommerce.netlify.app/",
  },
  {
    title: "Private Property",
    category: "Real Estate Platform",
    tools: "MERN Stack, MongoDB Atlas",
    image: "/images/property.png",
    link: "https://private-property-project.netlify.app/",
  },
  {
    title: "Gaming Hub",
    category: "Tic Tac Toe Game",
    tools: "JavaScript, Canvas API",
    image: "/images/game.png",
    link: "https://gaming-tic-tac-toe.netlify.app/",
  },
  {
    title: "Previous Portfolio",
    category: "Personal Design",
    tools: "HTML, CSS, JSAnimations",
    image: "/images/port.png",
    link: "https://hina-portfolio1.netlify.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <h4>{project.title}</h4>
                        </a>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <WorkImage image={project.image} alt={project.title} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

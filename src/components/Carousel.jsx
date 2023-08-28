import React, { useState, useEffect } from "react";
import "./a.css"; // Import the CSS file

const Carousel = () => {
  const cards = [
    "Web Dev",
    "App Dev",
    "Cloud",
    "AI/ML",
    "Web3",
    "Data Science",
  ];

  const interval = 5000; // Interval in milliseconds

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [cards.length, interval, activeIndex]);

  return (
    <div className="carousel-container">
      <h2 className="text-center mt-[3rem] text-2xl font-bold">GDSC Blogs</h2>
      <div className="carousel-track">
        {cards.map((label, index) => (
          <div
            key={index}
            className={`carousel-card ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png"
              alt="Card"
            />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

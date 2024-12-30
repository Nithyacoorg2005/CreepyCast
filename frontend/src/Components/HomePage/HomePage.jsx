import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { FaBook, FaFilm, FaStar, FaArrowRight } from "react-icons/fa";

import backgroundImage2 from "../../images/image copy 2.png";

const testimonials = [
  {
    text: "CreepyCast is a spine-chilling masterpiece! I love every moment of it.",
    author: "Sarah M.",
  },
  {
    text: "The audiobooks are hauntingly good. It's like being in a horror movie.",
    author: "Jake L.",
  },
  {
    text: "A must-have for any horror fan. The interface is sleek, and the content is amazing!",
    author: "Emily T.",
  },
];

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
    
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/5435304/pexels-photo-5435304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat:"no-repeat",
          height: "100vh",
          width:"100%",
          color: "white",
        }}
      >
        <div className="hero-content">
          <h1 style={{marginTop:"-500px"}} className="hero-title" data-parallax-text>
            Welcome to CreepyCast
          </h1>
          <p className="hero-subtitle" data-parallax-text>
            Immerse yourself in the chilling world of horror.
          </p>
        </div>
      </section>

    
      <section className="why-creepycast">
        <h2 style={{marginTop:"100px"}}>Why Choose CreepyCast?</h2>
        <div style={{marginTop:"100px"}} className="advantages">
          <div  className="advantage-item">
            <FaBook className="icon" />
            <h3>📖 Vast Horror Collection</h3>
            <p>From chilling classics to spine-tingling modern tales. Our collection will keep you up at night.</p>
          </div>
          <div className="advantage-item">
            <FaFilm className="icon" />
            <h3>🎬 Exclusive Horror Films</h3>
            <p>Handpicked movies, series, and original productions, all tailored to satisfy the darkest cravings.</p>
          </div>
          <div className="advantage-item">
            <FaStar className="icon" />
            <h3>🌟 5-Star Reviews</h3>
            <p>Our fans love us! Check out the rave reviews from horror aficionados around the world.</p>
          </div>
          <div className="advantage-item">
            <FaArrowRight className="icon" />
            <h3>⚡ Instant Streaming</h3>
            <p>No wait time. Start your horror journey with instant access to audiobooks, movies, and more.</p>
          </div>
        </div>
        <p className="why-text">
          CreepyCast isn’t just a streaming platform; it’s your gateway to a universe filled with dark thrills,
          bone-chilling audiobooks, exclusive horror films, and interactive experiences. We cater to both
          casual horror lovers and die-hard fans, offering something for every taste and fear threshold.
        </p>
      </section>

     
      <section
        className="testimonials-section"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px",
          color: "white",
          marginTop:"100px",
        }}
      >
        <h2 style={{marginTop:"100px"}}>User Reviews</h2>
        <div className="testimonial-slider">
          <div className="testimonial-slide">
            <p>"{testimonials[currentTestimonial].text}"</p>
            <h4>— {testimonials[currentTestimonial].author}</h4>
          </div>
        </div>
      </section>

      
      
        
      
    </div>
  );
};

export default HomePage;

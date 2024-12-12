import React, { useState } from 'react';
import './Anthologies.css';

const Anthologies = () => {
  const [filters, setFilters] = useState({
    year: 'All',
    popularity: 'All',
    language: 'All',
    rating: 'All',
  });

  const [selectedVideo, setSelectedVideo] = useState(null);

  const anthologyData = [
    {
      id: 1,
      title: "Cat's Eye",
      year: 2004,
      popularity: "Trending",
      language: "English",
      rating: 4.8,
      description: "A stray cat is the linking element of three tales of suspense and horror.",
      image: "https://m.media-amazon.com/images/M/MV5BNmJkY2Q0ZjktNDA2YS00NGEwLThlZTEtZDllZWQ1ZmQ1ZWIxXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_FMjpg_UX800_.jpg", // Replace with actual image URL
      videoUrl: "https://www.youtube.com/embed/fHv3qdIwpys",
    },
    {
      id: 2,
      title: "Dead of Night",
      year: 1945,
      popularity: "Popular",
      language: "Spanish",
      rating: 4.5,
      description: "Guests at an English estate recall nightmares.",
      image: "https://th.bing.com/th/id/OIP.ptX_vrE9KQlfnb7e-ejdvAHaK-?rs=1&pid=ImgDetMain", // Replace with actual image URL
      videoUrl: "https://www.youtube.com/embed/q3esGD6lcMM",
    },
    {
      id: 3,
      title: "The Twilight Zone",
      year: 2019,
      popularity: "Popular",
      language: "English",
      rating: 4.6,
      description: "A reboot of the classic anthology series featuring stories of science fiction, mystery, and horror.",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679017735i/102736103.jpg",
      videoUrl: "https://www.youtube.com/embed/OzJAMgWEy6I",
    },
    {
      id: 4,
      title: "Creepshow",
      year: 2019,
      popularity: "Trending",
      language: "English",
      rating: 4.7,
      description: "An anthology horror series based on the iconic 1982 film, showcasing spine-chilling tales of terror.",
      image: "https://th.bing.com/th/id/OIP.UypFDXGom-moW-zMDLy02wHaLH?rs=1&pid=ImgDetMain",
      videoUrl: "https://www.youtube.com/embed/9iyP9no8i8M",
    },
    {
      id: 5,
      title: "Black Mirror",
      year: 2011,
      popularity: "Trending",
      language: "English",
      rating: 4.9,
      description: "A dystopian anthology series exploring the dark side of technology and human behavior.",
      image: "https://th.bing.com/th/id/OIP.aLSvdHGgiQ9oYMwoebNkowAAAA?rs=1&pid=ImgDetMain",
      videoUrl: "https://www.youtube.com/embed/2bVik34nWws",
    },
    {
      id: 6,
      title: "Masters of Horror",
      year: 2005,
      popularity: "Classic",
      language: "English",
      rating: 4.5,
      description: "A horror anthology series featuring terrifying tales crafted by renowned horror directors.",
      image: "https://th.bing.com/th/id/OIP.EPo9CnOhG2ItNQ-46KT-TAAAAA?rs=1&pid=ImgDetMain",
      videoUrl: "https://www.youtube.com/embed/71oW5HQB0xw",
    },
    {
      id: 7,
      title: "Tales from the Crypt",
      year: 1989,
      popularity: "Popular",
      language: "English",
      rating: 4.7,
      description: "A cult classic horror series presenting wickedly fun tales of fright, hosted by the Crypt Keeper.",
      image: "https://th.bing.com/th/id/OIP.-8CkrpD_JAhYUb1AhOo0pwHaJQ?rs=1&pid=ImgDetMain",
      videoUrl: "https://www.youtube.com/embed/6m5XwND5zX4",
    },
    
    // Add more anthology data here...
  ];

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const filteredAnthologies = anthologyData.filter((anthology) => {
    return (
      (filters.year === 'All' || anthology.year === parseInt(filters.year)) &&
      (filters.popularity === 'All' || anthology.popularity === filters.popularity) &&
      (filters.language === 'All' || anthology.language === filters.language) &&
      (filters.rating === 'All' || anthology.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div className="anthologies-page">
      <h1 style={{marginTop:"120px",marginLeft:"500px"}}>Anthologies</h1>
      <div style={{marginLeft:"30px",fontFamily:"outfit"}} className="filters">
        <label>
          Year:
          <select onChange={(e) => handleFilterChange('year', e.target.value)}>
            <option style={{fontFamily:"outfit"}} value="All">All</option>
            <option  style={{fontFamily:"outfit"}}value="2022">2022</option>
            <option style={{fontFamily:"outfit"}} value="2021">2021</option>
            <option style={{fontFamily:"outfit"}} value="2020">2020</option>
          </select>
        </label>
        <label>
          Popularity:
          <select onChange={(e) => handleFilterChange('popularity', e.target.value)}>
            <option  style={{fontFamily:"outfit"}}value="All">All</option>
            <option style={{fontFamily:"outfit"}} value="Trending">Trending</option>
            <option  style={{fontFamily:"outfit"}}value="Popular">Popular</option>
          </select>
        </label>
        <label>
          Language:
          <select onChange={(e) => handleFilterChange('language', e.target.value)}>
            <option  style={{fontFamily:"outfit"}}value="All">All</option>
            <option  style={{fontFamily:"outfit"}}value="English">English</option>
            <option  style={{fontFamily:"outfit"}}value="Spanish">Spanish</option>
            <option  style={{fontFamily:"outfit"}}value="French">French</option>
          </select>
        </label>
        <label>
          Rating:
          <select onChange={(e) => handleFilterChange('rating', e.target.value)}>
            <option  style={{fontFamily:"outfit"}}value="All">All</option>
            <option  style={{fontFamily:"outfit"}}value="4.5">4.5+</option>
            <option  style={{fontFamily:"outfit"}}value="4">4+</option>
            <option  style={{fontFamily:"outfit"}}value="3.5">3.5+</option>
          </select>
        </label>
      </div>

      <div className="anthology-list">
        {filteredAnthologies.length > 0 ? (
          filteredAnthologies.map((anthology) => (
            <div
              key={anthology.id}
              className="anthology-card"
              onClick={() => setSelectedVideo(anthology)}
            >
              <img src={anthology.image} alt={anthology.title} className="anthology-image" />
              <h2>{anthology.title}</h2>
              <p>{anthology.description}</p>
              <p>{anthology.year}</p>
              <p>{anthology.language}</p>
              <p>⭐ {anthology.rating}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No Anthologies Found</p>
        )}
      </div>

      {selectedVideo && (
       <div className="video-player-overlay">
       <button className="close-button" onClick={() => setSelectedVideo(null)}>✖</button>
       <iframe
         width="800"
         height="800"
         src={selectedVideo.videoUrl}
         title={selectedVideo.title}
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
       ></iframe>
     </div>
     
      )}
    </div>
  );
};

export default Anthologies;

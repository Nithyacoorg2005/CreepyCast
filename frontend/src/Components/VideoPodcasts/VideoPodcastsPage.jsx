import React, { useState } from "react";
import "./VideoPodcastsPage.css";

// Sample Data
const videoPodcasts = [
  {
    id: 1,
    title: "True Ghost Stories From The Himalayas - With Extreme Mountaineer Arjun Vajpai",
    description: "Unravel terrifying stories from forgotten times...",
    releaseDate: "2024-10-31",
    language: "Hindi",
    popularity: 4.8,
    videoUrl: "https://www.youtube.com/embed/6kSTafu6ilo",
    year: 2024,
    image:
      "https://megaphone.imgix.net/podcasts/1e81a81e-f909-11ea-bf3d-e76a5b5a719e/image/uploads_2F1600362856773-auxhqqbh9r-e5d344eac526fb619b909e329714ebe4_2FParcast_Podcast_HauntedPlaces%2BGhost%2BStories_3000x3000.jpg",
  },
  {
    id: 2,
    title: "Real Scary Vastu Stories – Acharaya Pankit Goyal Shares Personal Experience",
    description: "Spine-chilling stories exploring the unknown...",
    releaseDate: "2024-09-15",
    language: "Hindi",
    popularity: 4.7,
    videoUrl: "https://www.youtube.com/embed/oQx1us4PyCY",
    year: 2024,
    image:
      "https://wp.scoopwhoop.com/wp-content/uploads/2023/11/2-1-1.png?w=1024",
  },
  {
    id: 3,
    title: "ಭೂತದ ಚಿತ್ರದ ರಹಸ್ಯ: The Mystery of the Haunted Paintings",
    description: "Spine-chilling stories exploring the unknown...",
    releaseDate: "2024-05-11",
    language: "Kannada",
    popularity: 4.7,
    videoUrl: "https://www.youtube.com/embed/Slxc211uCOM",
    year:"2024",
    image:"https://i.ytimg.com/vi/C7vE2WUKV_Q/maxresdefault.jpg",
  },
  
   
 
  {
    id: 4,
    title: "We Caught Her On Camera (Real Horror Story)",
    description: "Spine-chilling stories exploring the unknown...",
    releaseDate: "2022-12-29",
    language: "Hindi",
    popularity: 4.7,
    videoUrl: "https://www.youtube.com/embed/EDUVDymksmU",
    year: 2024,
    image:
      "https://i.ytimg.com/vi/zrdyBYRXHjU/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "Real Ghost Battle Story Outside Mumbai - Watch At Your Own Risk",
    description: "Spine-chilling stories exploring the unknown...",
    releaseDate: "2022-11-05",
    language: "English",
    popularity: 4.7,
    videoUrl: "https://www.youtube.com/embed/CUG-uwydVqc",
    year: 2024,
    image:
      "https://i.ytimg.com/vi/I9aMMi4bYCU/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYfyBZKCQwDw==&rs=AOn4CLDa8af__sApLKMHEwkRaaHT_FCZRQ",
  },
  // Add more podcasts here
];

const VideoPodcastsPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [modalVideo, setModalVideo] = useState(null);

  // Filters
  const filteredPodcasts = videoPodcasts.filter((podcast) => {
    return (
      (selectedLanguage ? podcast.language === selectedLanguage : true) &&
      (selectedYear ? podcast.year.toString() === selectedYear : true)
    );
  });

  return (
    <div style={{width:"1150px",marginLeft:"120px"}} className="video-podcasts-page">
      {/* Filters */}
      <div className="filters">
        <h2 style={{marginTop:"100px"}}>Video Podcasts</h2>
        <label style={{marginTop:"100px"}}>
          Year:
          <select  onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
            <option value="">All</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </label>
        <label style={{marginTop:"100px"}}>
          Language:
          <select onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
            <option value="">All</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>
      </div>

      {/* Podcast List */}
      <div className="podcast-list">
        {filteredPodcasts.map((podcast) => (
          <div key={podcast.id} className="podcast-card" onClick={() => setModalVideo(podcast)}>
            <img src={podcast.image} alt={podcast.title} />
            <h3>{podcast.title}</h3>
            <p>Year: {podcast.year}</p>
            <p>Language: {podcast.language}</p>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {modalVideo && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setModalVideo(null)}>
              &times;
            </button>
            <h2>{modalVideo.title}</h2>
            <p>{modalVideo.description}</p>
            <iframe
              width="560"
              height="315"
              src={modalVideo.videoUrl}
              title={modalVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPodcastsPage;

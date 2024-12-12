import React, { useState, useRef, useEffect } from 'react';
import './SeriesPage.css';

const SeriesPage = () => {
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const episodesRef = useRef(null); // Ref to scroll to episodes section
  const videoRef = useRef(null); // Ref to scroll to video modal

  const seriesData = [
    {
      id: 1,
      title: "From 👻",
      genre: ["Horror", "Science-Fiction"],
      year: 2022,
      rating: 4.5,
      thumbnail:
        "https://artworks.thetvdb.com/banners/v4/season/1919181/posters/6445b1b8438c1.jpg",
      description:
        "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.",
      extraDetails:
        "Perfect for thrill-seekers 🎢 and lovers of the supernatural! Each episode unfolds gripping mysteries, heart-pounding scares 💓, and captivating twists. 🌟",
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              id: 1,
              title: "The Beginning 🌀",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/pDHqAj4eJcM",
            },
            {
              id: 2,
              title: "The Whispering 🌬️",
              duration: "42 min",
              videoUrl: "https://youtube.com/embed/5KvMLgeh3jA",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Supernatural 👻",
      genre: ["Horror", "Drama","Supernatural"],
      year: 2005-2020,
      rating: 4.5,
      thumbnail:
        "https://th.bing.com/th/id/OIP.vc15-3rJD-NZDzUVbwfEvAHaLH?rs=1&pid=ImgDetMain",
      description:
        "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and gods that roam the earth.",
      extraDetails:
        "Perfect for thrill-seekers 🎢 and lovers of the supernatural! Each episode unfolds gripping mysteries, heart-pounding scares 💓, and captivating twists. 🌟",
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              id: 1,
              title: "The Beginning 🌀",
              duration: "45 min",
              videoUrl: "https://www.youtube.com/embed/t-775JyzDTk",
            },
            {
              id: 2,
              title: "The Whispering 🌬️",
              duration: "42 min",
              videoUrl: "https://www.youtube.com/embed/dKtE0l0J0uA?list=PLMPFuMw5XsGj66tOFpJnF5ChNw5R-WQ0_",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "The Originals👻",
      genre: ["Horror", "Drama","Fantasy"],
      year: 2015,
      rating: 8.3,
      thumbnail:
        "https://th.bing.com/th/id/OIP.RGZNJiYM1dC9BWLyw3k_tQHaLH?rs=1&pid=ImgDetMain",
      description:
        "As the Original vampire-werewolf hybrid Klaus Mikaelson (Joseph Morgan) returned to the vibrant, supernaturally charged city of New Orleans, he and his siblings",
      extraDetails:
        "unaware that a ruthless pack of wolves was already lurking in the city, waiting to stage a violent coup. Now, in season two, a new status quo must be adjusted to.",
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              id: 1,
              title: "The Beginning 🌀",
              duration: "45 min",
              videoUrl: "https://youtube.com/embed/GXrDYboUnnw",
            },
            {
              id: 2,
              title: "The Whispering 🌬️",
              duration: "42 min",
              videoUrl: "https://youtube.com/embed/8BDsO3jM8K0",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Teen Wolf 👻",
      genre: ["Horror", "Action","Drama","Fantasy"],
      year: 2017,
      rating: 7.7,
      thumbnail:
        "https://th.bing.com/th/id/OIP.xTMnkAuuDPV99Pwi3SCMGgDSEs?w=520&h=740&rs=1&pid=ImgDetMain",
      description:
        "A single wolf bite changes everything for awkward high school sophomore Scott McCall (Tyler Posey). ",
      extraDetails:
        "Now Scott has super-human abilities, but he also soon finds himself being pulled into the middle of a war between werewolves and werewolf hunters!",
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              id: 1,
              title: "The Beginning 🌀",
              duration: "45 min",
              videoUrl: "https://youtube.com/embed/zi5Q-xP_ans",
            },
            {
              id: 2,
              title: "The Whispering 🌬️",
              duration: "42 min",
              videoUrl: "https://youtube.com/embed/fy4N-m4OxuI",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Stranger School Tales 👻",
      genre: ["Horror", "Science-Fiction"],
      year: 2022,
      rating: 4.5,
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOTQyMWY0YzctMTkzNi00MzAxLWFmZjYtZTdkOWJkN2VjM2IxXkEyXkFqcGdeQXVyMTI0MjkxODA5._V1_.jpg",
      description:
        "This anthology brings together three gripping stories, each exploring the eerie secrets of Eungbo High School. ",
      extraDetails:
        "From hidden mysteries to the lives of those caught in its shadows, uncover the dark and unsettling truths that haunt its halls.",
      seasons: [
        {
          seasonNumber: 1,
          episodes: [
            {
              id: 1,
              title: "The Beginning 🌀",
              duration: "45 min",
              videoUrl: "https://youtube.com/embed/t-CtcO9ktpw",
            },
            {
              id: 2,
              title: "The Whispering 🌬️",
              duration: "42 min",
              videoUrl: "https://youtube.com/embed/896VuW6pEJ0",
            },
          ],
        },
      ],
    },
  ];

  const handleSeriesClick = (series) => {
    setSelectedSeries(series);
    setSelectedSeason(null);
    setSelectedEpisode(null);
    setTimeout(() => window.scrollTo({ top: episodesRef.current.offsetTop - 80, behavior: 'smooth' }), 300);
  };

  const handleSeasonChange = (seasonIndex) => {
    const season = selectedSeries.seasons[seasonIndex];
    setSelectedSeason(season);
    setSelectedEpisode(null);
    setTimeout(() => {
      episodesRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleWatchNow = (episode) => {
    setSelectedEpisode(episode);
    setIsModalOpen(true);
    setTimeout(() => {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleModalBackgroundClick = (e) => {
    if (e.target.className === "modal") {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="series-page">
    
      <div style={{marginTop:"-50px"}} className="hero-section">
        <div className="hero-content">
          <h1 style={{marginTop:"-100px"}}>Welcome to CreepyCast Series 🌌</h1>
          <p>🕷️ Explore gripping tales and thrilling sagas for a spine-chilling experience! 🎬</p>
        </div>
      </div>

      {/* Series List */}
      <div style={{marginLeft:"150px",marginTop:"50px"}} className="series-list">
        {seriesData.map((series) => (
          <div key={series.id} className="series-card" onClick={() => handleSeriesClick(series)}>
            <img style={{ width:"280px",height:"280px"}}src={series.thumbnail} alt={series.title} />
            <div className="series-info">
              <h2 style={{padding:"5px"}}>{series.title}</h2>
              <p  style={{padding:"5px"}}>{series.genre.join(", ")}</p>
              <span  style={{padding:"5px"}}>⭐ {series.rating}</span>
              <p  style={{padding:"5px"}}>{series.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Series Details */}
      {selectedSeries && (
        <div className="series-details" ref={episodesRef}>
          <h2>{selectedSeries.title}</h2>
          <p>{selectedSeries.description}</p>
          <p>{selectedSeries.extraDetails}</p>
          <p>📅 Year: {selectedSeries.year} | ⭐ Rating: {selectedSeries.rating}</p>

          <h3>Select a Season:</h3>
          <select
            className="season-select"
            onChange={(e) => handleSeasonChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Select Season
            </option>
            {selectedSeries.seasons.map((season, index) => (
              <option key={index} value={index}>
                Season {season.seasonNumber}
              </option>
            ))}
          </select>

          {/* Episodes List */}
          {selectedSeason && (
            <div className="episodes-list">
              <h3>Episodes in Season {selectedSeason.seasonNumber}:</h3>
              {selectedSeason.episodes.map((episode) => (
                <div key={episode.id} className="episode-card">
                  <p>
                    {episode.title} ({episode.duration})
                  </p>
                  <button onClick={() => handleWatchNow(episode)}>Watch Now</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal for Video Playback */}
      {isModalOpen && selectedEpisode && (
        <div className="modal" onClick={handleModalBackgroundClick} ref={videoRef}>
          <div className="modal-content">
            <h3>Now Playing: {selectedEpisode.title}</h3>
            {selectedEpisode.videoUrl.includes("youtube") ? (
              <iframe
                width="100%"
                height="400"
                src={selectedEpisode.videoUrl}
                title={selectedEpisode.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls autoPlay width="100%">
                <source src={selectedEpisode.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeriesPage;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ModernMoviePage.css";

const ModernMoviePage = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      poster: "https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg",
      year: 2010,
      genre: "Sci-Fi, Thriller",
      description: "A thief steals corporate secrets using dream-sharing technology.",
      rating: 4.8,
      trailer: "https://www.youtube.com/embed/8hP9D6kZseM",
    },
    {
      id: 2,
      title: "Parasite",
      poster: "https://wallpapercave.com/wp/wp5264425.jpg",
      year: 2019,
      genre: "Drama, Thriller",
      description: "A poor family schemes to infiltrate a wealthy household.",
      rating: 4.9,
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
    },
    {
      id: 3,
      title: "Dune",
      poster: "https://i.pinimg.com/originals/ed/5e/99/ed5e9926e3b45827e57f2d723bb693dc.jpg",
      year: 2021,
      genre: "Sci-Fi, Adventure",
      description: "A noble family fights for control of a desert planet's spice.",
      rating: 4.7,
      trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
    },
    {
      id: 4,
      title: "Talk to me",
      poster: "https://i5.walmartimages.com/seo/Talk-To-Me-2023-Blu-Ray-DVD-Digital-Copy-Starring-Sophie-Wilde_0b38ef20-bd2c-4fac-9415-d702527ee3df.32d012e021f983edc80ce5080e2d6181.jpeg",
      year: 2022,
      genre: "Supernatural,Teen Horror,Horror,Thriller",
      description: "A noble family fights for control of a desert planet's spice.",
      rating: 7.1,
      trailer: "https://youtube.com/embed/aLAKJu9aJys",
    },
    {
      id: 5,
      title: "IT",
      poster: "https://avatarfiles.alphacoders.com/108/108033.jpg",
      year: 2017,
      genre: "Monster Horror,Supernatural Horror,Horror",
      description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
      rating: 4.7,
      trailer: "https://youtube.com/embed/xKJmEC5ieOk",
    },
    {
      id: 6,
      title: "The Others",
      poster: "https://th.bing.com/th/id/OIP.ECBt_f8rklh9XQGl10V2QwHaK6?rs=1&pid=ImgDetMain",
      year: 2001,
      genre: "Period Drama,Pyschological Drama,Suspense horror, Mystery,Thriller",
      description: "In 1945, immediately following the end of Second World War, a woman who lives with her two photosensitive children on her darkened old family estate in the Channel Islands becomes convinced that the home is haunted.",
      rating: 7.6,
      trailer: "https://youtube.com/embed/C7pKqaPtMiA",
    },
    {
      id: 7,
      title: "It follows",
      poster: "https://th.bing.com/th/id/OIP.EaxhL03CYnBQsxYQEPbqRQHaLH?rs=1&pid=ImgDetMain",
      year: 2014,
      genre: "Pyschological Drama,Suspense horror, Mystery,Thriller",
      description: "A young woman is followed by an unknown supernatural force after a sexual encounter.",
      rating: 6.8,
      trailer: "https://youtube.com/embed/HkZYbOH0ujw",
    },
    {
      id: 8,
      title: "The Grudge",
      poster: "https://www.themoviedb.org/t/p/original/v5vUoDRG5azfAsoKEhT2DqpEjnh.jpg",
      year: 2004,
      genre: "Supernatural Horror,Horror",
      description: "An American nurse living and working in Tokyo is exposed to a mysterious supernatural curse, one that locks a person in a powerful rage before claiming their life and spreading to another victim.",
      rating: 5.9,
      trailer: "https://youtube.com/embed/tqn2t3PefdY",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openTrailerModal = (movie) => {
    setSelectedMovie(movie);
    setShowTrailerModal(true);
  };

  const closeTrailerModal = () => {
    setShowTrailerModal(false);
    setSelectedMovie(null);
  };

  return (
    <div style={{marginTop:"100px",marginLeft:"100px"
    }} className="modern-movie-page">
      <header className="movie-header">
        <h1 style={{marginLeft:"-20px"}}>🎬 Modern Movies</h1>
        <p style={{marginLeft:"-50px"}}>Explore the best of contemporary cinema!</p>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <motion.div
            className="movie-card"
            key={movie.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => openTrailerModal(movie)}
          >
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>⭐ {movie.rating} | {movie.year}</p>
              <p>{movie.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {showTrailerModal && selectedMovie && (
        <div className="modal-overlay" onClick={closeTrailerModal}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedMovie.title}</h2>
            <iframe
              src={selectedMovie.trailer}
              title={selectedMovie.title}
              allowFullScreen
            ></iframe>
            <p>{selectedMovie.description}</p>
            <button onClick={closeTrailerModal}>Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ModernMoviePage;

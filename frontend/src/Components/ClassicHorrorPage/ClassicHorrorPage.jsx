import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ClassicHorrorPage.css";

const ClassicHorrorPage = () => {
  const movies = [
    {
      id: 1,
      title: "The Child Remains",
      poster: "https://i.ytimg.com/vi/ATi3GdospAo/maxresdefault.jpg",
      year: 2017,
      description: "Michael Melski's supernatural thriller 'The Child Remains' is based on the chilling story of a maternity home in Nova Scotia, where 400 to 600 children were starved to death by a couple who ran a maternity home.",
      rating: 4.5,
      trailer: "https://youtube.com/embed/ATi3GdospAo",
    },
    {
      id: 2,
      title: "Bhool Bhulaiyaa",
      poster: "https://c.saavncdn.com/056/Bhool-Bhulaiyaa-Hindi-2007-20221122005742-500x500.jpg",
      year: 2007,
      description:
        "An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery.",
      rating: 5.0,
      trailer: "https://youtube.com/embed/jzYxbnHHhY4",
    },
    {
      id: 3,
      title: "Pari",
      poster: "https://th.bing.com/th/id/OIP.cZdGFsVR5WfyVinIlZ6MFAHaFL?rs=1&pid=ImgDetMain",
      year: 2018,
      description:
        "A young girl is possessed by a mysterious entity, leading to an epic battle of good versus evil.",
      rating: 4.8,
      trailer: "https://youtube.com/embed/yy1mEJtSnNw",
    },
    {
      id: 4,
      title: "Munkar",
      poster: "https://th.bing.com/th/id/OIP.6EXssVPfDv2Nn5p3ezR7sgHaFj?rs=1&pid=ImgDetMain",
      year: 2024,
      description:
        "An oddity that caused unrest at an Islamic boarding school occurred since one of the female students returned",
      rating: 4.8,
      trailer: "https://youtube.com/embed/dEkO-32wXo4",
    },
    {
      id: 5,
      title: "Demonte Colony",
      poster: "https://1.bp.blogspot.com/-TXGjSN-ojQs/X-3S-3J_gEI/AAAAAAAAAMw/koYKTkuc8cQgY_YsVnVFH_U8M6e-2ioNwCLcBGAsYHQ/s1920/33.%2BFategi_Demonte.jpg",
      year: 2015,
      description:
        "After consuming liquor, four friends decide to do something interesting and visit a haunted bungalow. However, they do not realize that they have returned home with an evil spirit.",
      rating: 4.8,
      trailer: "https://youtube.com/embed/iYefMGpaPZc",
    },
    {
      id: 6,
      title: "Prey For The Devil",
      poster: "https://i.ytimg.com/vi/oXydjJL463w/maxresdefault.jpg",
      year: 2022,
      description:
        "A nun prepares to perform an exorcism and comes face to face with a demonic force with mysterious ties to her past.",
      rating: 4.8,
      trailer: "https://youtube.com/embed/smC8OGl-9b4",
    },
    {
      id: 7,
      title: "JungleMahal:The Awakening",
      poster: "https://filminformation.com/wp-content/uploads/2023/01/Junglemahal-1.jpg",
      year: 2023,
      description:
        "Loosely based on real incidents in the monsoon of mid 80s during the uprising of naxalites in eastern ghat range a group of travellers travels through the deep forests to reach the rescue camps. A series of mysterious incidents started taking place around them as the place is not...",
      rating: 4.8,
      trailer: "https://youtube.com/embed/lxePbYmBc7Q",
    },
    {
      id: 8,
      title: "1920",
      poster: "https://d2zub9v50g8scn.cloudfront.net/yupptv/Movies/yupp/1080x400/1920.jpg",
      year: 2008,
      description:
        "After forsaking his family and religion, a husband finds his wife is demoniacally possessed.",
      rating: 4.8,
      trailer: "https://youtube.com/embed/ai304KD-bk8",
    },
  
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filterDecade, setFilterDecade] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterDecade === "All" ||
        (filterDecade === "1930s" && movie.year < 1940) ||
        (filterDecade === "1960s" && movie.year >= 1960 && movie.year < 1970) ||
        (filterDecade === "1970s" && movie.year >= 1970 && movie.year < 1980))
  );

  const openMovieModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div style={{marginLeft:"50px"}} className="classic-horror-page">
      <header className="horror-header">
        <h1 style={{marginTop:"150px"}}>👻 Classic Horror Movies 🎥</h1>
        <p>Rediscover the classics that haunt us to this day!</p>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterDecade}
          onChange={(e) => setFilterDecade(e.target.value)}
        >
          <option value="All">All Decades</option>
          <option value="1930s">1930s</option>
          <option value="1960s">1960s</option>
          <option value="1970s">1970s</option>
        </select>
      </div>

      <div style={{marginTop:"100px",marginRight:"150px"}}className="movie-grid">
        {filteredMovies.map((movie) => (
          <motion.div style={{width:"300px",marginLeft:"50px"}}
            className="movie-card"
            key={movie.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => openMovieModal(movie)}
          >
            <img style={{width:"300px",height:"300px"}} src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>⭐ {movie.rating} | {movie.year}</p>
              <p>{movie.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={closeMovieModal}>
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
            <button onClick={closeMovieModal}>Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ClassicHorrorPage;

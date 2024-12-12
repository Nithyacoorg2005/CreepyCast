import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ThrillersPage.css';

const ThrillersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('popularity');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const thrillerMovies = [
    {
      id: 1,
      title: 'Annabelle',
      releaseYear: 2014,
      rating: 8.1,
      genre: 'Horror, Mystery, Thriller',
      description:
        'A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.',
      trailer: 'https://www.youtube.com/embed/paFgQNPGlsg',
    },
    {
      id: 2,
      title: 'The Substance',
      releaseYear: 2024,
      rating: 8.1,
      genre: 'Horror, Mystery, Thriller',
      description:
        'A fading celebrity takes a black-market drug: a cell-replicating substance that temporarily creates a younger, better version of herself.',
      trailer: 'https://youtube.com/embed/LNlrGhBpYjc',
    },
    {
      id: 3,
      title: 'Smile',
      releaseYear: 2022,
      rating: 8.1,
      genre: 'Horror, Mystery, Thriller',
      description:
        'After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity.',
      trailer: 'https://youtube.com/embed/BcDK7lkzzsU',
    },
    {
      id: 4,
      title: 'Hereditary',
      releaseYear: 2014,
      rating: 8.1,
      genre: 'Horror, Psychological Horror, Thriller',
      description: 'A grieving family is haunted by tragic and disturbing occurrences.',
      trailer: 'https://youtube.com/embed/V6wWKNij_1M',
    },
    {
      id: 5,
      title: 'The Conjuring',
      releaseYear: 2013,
      rating: 8.1,
      genre: 'Supernatural Horror, Mystery, Thriller',
      description:
        'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
      trailer: 'https://youtube.com/embed/k10ETZ41q5o',
    },
    {
      id: 6,
      title: 'The Conjuring 2',
      releaseYear: 2016,
      rating: 7.3,
      genre: 'Supernatural Horror, Mystery, Thriller',
      description:
        'Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.',
      trailer: 'https://youtube.com/embed/VFsmuRPClr4',
    },
    {
      id: 7,
      title: 'Stree 2: Sarkate Ka Aatank',
      releaseYear: 2024,
      rating: 7.0,
      genre: 'Comedy, Horror',
      description:
        'After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity.',
      trailer: 'https://youtube.com/embed/KVnheXywIbY',
    },
  ];

  const handleSearch = (e) => setSearchTerm(e.target.value);

  // Filter and sort movies
  const filteredMovies = thrillerMovies
    .filter((movie) =>
      filter === 'all' ? true : movie.genre.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sort === 'popularity'
        ? b.rating - a.rating
        : sort === 'releaseYear'
        ? b.releaseYear - a.releaseYear
        : 0
    );

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMovie(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ marginTop: '100px', marginLeft: '100px', marginRight: '100px' }} className="thrillers-page">
      <header>
        <h1>🎬 Thrilling Adventures Await</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="🔍 Search movies by title..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Genres</option>
            <option value="Supernatural">Supernatural</option>
            <option value="Comedy">Comedy</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
          </select>
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="popularity">Sort by Popularity 🌟</option>
            <option value="releaseYear">Sort by Release Year 📅</option>
          </select>
        </div>
      </header>

      <main>
        {filteredMovies.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.2rem' }}>
            😔 No movies found matching your search/filter criteria.
          </p>
        ) : (
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <motion.div key={movie.id} className="movie-card" whileHover={{ scale: 1.05 }}>
                <div className="movie-header">
                  <h3>{movie.title}</h3>
                  <span>⭐ {movie.rating}</span>
                </div>
                <p>{movie.description}</p>
                <button className="watch-now" onClick={() => setSelectedMovie(movie)}>
                  🎥 Watch Now
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            <p>Genre: {selectedMovie.genre}</p>
            <p>Release Year: {selectedMovie.releaseYear}</p>
            <p>Rating: ⭐ {selectedMovie.rating}</p>
            <p>Description: {selectedMovie.description}</p>
            <iframe
              width="560"
              height="315"
              src={`${selectedMovie.trailer}?autoplay=1`}
              title={selectedMovie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button onClick={() => setSelectedMovie(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThrillersPage;

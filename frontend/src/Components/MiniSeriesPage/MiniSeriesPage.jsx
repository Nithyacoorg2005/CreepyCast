import React, { useState } from "react";
import "./MiniSeriesPage.css";

const MiniSeriesPage = () => {
  const [filters, setFilters] = useState({
    genre: "",
    minRating: 0,
    year: "",
  });
  const [sortOption, setSortOption] = useState("popularity");

  const miniSeriesData = [
    {
      id: 1,
      title: "Haunting Shadows 🌑",
      genre: "Horror",
      year: 2021,
      rating: 4.7,
      thumbnail: "path-to-thumbnail.jpg",
      description: "A spine-chilling story of a cursed family mansion. 🏚️",
    },
    {
      id: 2,
      title: "Twilight Mystery 🌆",
      genre: "Mystery",
      year: 2022,
      rating: 4.2,
      thumbnail: "path-to-thumbnail.jpg",
      description: "An unsolved crime that unfolds with every episode. 🕵️",
    },
  
  ];

  const filteredSeries = miniSeriesData
    .filter((series) => 
      (!filters.genre || series.genre === filters.genre) &&
      (!filters.year || series.year.toString() === filters.year) &&
      series.rating >= filters.minRating
    )
    .sort((a, b) => {
      if (sortOption === "popularity") return b.rating - a.rating; 
      if (sortOption === "year") return b.year - a.year;
      return 0;
    });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="mini-series-page">
      <div className="filters">
        <h2>Filter & Sort Mini-Series 🎭</h2>
        <div className="filter-options">
          <select name="genre" onChange={handleFilterChange} defaultValue="">
            <option value="" disabled>
              Select Genre
            </option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
          </select>
          <input
            type="number"
            name="minRating"
            placeholder="Minimum Rating"
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Release Year"
            onChange={handleFilterChange}
          />
          <select onChange={handleSortChange} defaultValue="popularity">
            <option value="popularity">Sort by Popularity</option>
            <option value="year">Sort by Year</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      <div className="mini-series-list">
        {filteredSeries.length > 0 ? (
          filteredSeries.map((series) => (
            <div key={series.id} className="mini-series-card">
              <img src={series.thumbnail} alt={series.title} />
              <div className="mini-series-info">
                <h3>{series.title}</h3>
                <p>{series.genre} | ⭐ {series.rating}</p>
                <p>{series.year}</p>
                <button>Watch Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No mini-series found matching your criteria. 😞</p>
        )}
      </div>
    </div>
  );
};

export default MiniSeriesPage;

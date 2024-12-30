import React, { useState } from 'react';
import './HorrorPodcasts.css';

const HorrorPodcasts = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    sort: 'Newest',
  });

  const podcastData = [
    {
      id: 1,
      title: 'The Haunted Forest',
      description:
        'Explore the chilling tales of the haunted forest where shadows have a story. It is said that the souls of the lost wander through the trees, calling out for help.',
      releaseDate: '2024-11-15',
      duration: '25:32',
      popularity: 5,
      image: 'https://th.bing.com/th/id/OIP.5IfOfaRzalFR8Q0Aftr2WwHaEK?rs=1&pid=ImgDetMain', 
      audioUrl: 'videos/horror-background-tension-254885.mp3', 
    },
    {
      id: 2,
      title: 'Ghost Stories Untold',
      description:
        'Unravel terrifying stories from forgotten times. This podcast uncovers the ghostly apparitions and eerie tales passed down through generations.',
      releaseDate: '2024-10-31',
      duration: '35:20',
      popularity: 4.8,
      image: 'https://megaphone.imgix.net/podcasts/1e81a81e-f909-11ea-bf3d-e76a5b5a719e/image/uploads_2F1600362856773-auxhqqbh9r-e5d344eac526fb619b909e329714ebe4_2FParcast_Podcast_HauntedPlaces%2BGhost%2BStories_3000x3000.jpg?ixlib=rails-2.1.2&max-w=3000&max-h=3000&fit=crop&auto=format,compress',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    {
      id: 3,
      title: 'Whispers in the Dark',
      description:
        'Dive into spine-chilling stories that explore the unknown. A podcast that brings haunted places and creepy whispers to life.',
      releaseDate: '2024-09-15',
      duration: '40:10',
      popularity: 4.9,
      image: 'https://flxt.tmsimg.com/assets/p14139_p_v13_ab.jpg',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    {
      id: 4,
      title: 'MidNight Huntings',
      description:
        'Join us at midnight to explore ghostly tales and real-life paranormal experiences that will leave you wide awake.',
      releaseDate: '2024-10-01',
      duration: '45:30',
      popularity: 4.7,
      image: 'https://th.bing.com/th/id/OIP.r-Yy_U-J-xiwY79PHS242QAAAA?rs=1&pid=ImgDetMain',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    {
      id: 5,
      title: 'Echoes of Fear',
      description:
        'Echoes of Fear features eerie encounters and true horror stories shared by listeners from around the world.',
      releaseDate: '2024-11-05',
      duration: '38:15',
      popularity: 4.6,
      image: 'https://th.bing.com/th/id/OIP.iiLW418QLIiG_3k0SGkwfQHaKo?rs=1&pid=ImgDetMain',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    {
      id: 6,
      title: 'Paranormal Chronicles',
      description:
        'A gripping podcast uncovering haunted places, mysterious disappearances, and chilling paranormal activities.',
      releaseDate: '2024-09-25',
      duration: '50:45',
      popularity: 4.8,
      image: 'https://m.media-amazon.com/images/I/91kMWbZ10dL._SL1500_.jpg',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    {
      id: 7,
      title: 'Haunting Echoes',
      description:
        'Listen to the echoes of ghosts from the past. Each episode tells a unique tale of horror and mystery, guaranteed to haunt your dreams.',
      releaseDate: '2024-11-10',
      duration: '42:00',
      popularity: 4.9,
      image: 'https://media.s-bol.com/JLQWvk67YXg/550x825.jpg',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    {
      id: 8,
      title: 'Phantom Files',
      description:
        'The Phantom Files explores urban legends and supernatural occurrences that will make you question what you believe.',
      releaseDate: '2024-08-20',
      duration: '47:30',
      popularity: 4.7,
      image: 'https://th.bing.com/th/id/OIP.tU0J818NiwQXvwKo3NVvQAHaHa?rs=1&pid=ImgDetMain',
      audioUrl: 'videos/horror-background-tension-254885.mp3',
    },
    

  ];

  const filteredPodcasts = podcastData
    .filter((podcast) =>
      podcast.title.toLowerCase().includes(filters.search.toLowerCase())
    )
    .sort((a, b) => {
      if (filters.sort === 'Newest') {
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      } else if (filters.sort === 'Oldest') {
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      } else if (filters.sort === 'Popularity') {
        return b.popularity - a.popularity;
      }
      return 0;
    });

  return (
    <div className="horror-podcasts">
      <h1 style={{marginTop:"120px",marginLeft:"480px",width:"850px"
      }}>Horror Podcasts</h1>

      <div style={{marginLeft:"150px"}}className="filters">
        <input
          type="text"
          placeholder="Search podcasts..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <select
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Popularity">Popularity</option>
        </select>
      </div>

      <div style={{marginTop:"50px",marginLeft:"220px",gap:"30px"}}className="podcast-list">
        {filteredPodcasts.length > 0 ? (
          filteredPodcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="podcast-card"
              onClick={() => setSelectedPodcast(podcast)}
            >
              <img
                src={podcast.image}
                alt={podcast.title}
                className="podcast-image"
              />
              <div className="podcast-info">
                <h2>{podcast.title}</h2>
                <p>{podcast.description}</p>
                <p>📅 {podcast.releaseDate}</p>
                <p>⏱ {podcast.duration}</p>
                <p>⭐ {podcast.popularity}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No Podcasts Found</p>
        )}
      </div>

      {selectedPodcast && (
        <div className="audio-player">
          <button style={{marginRight:"60px",fontSize:"16px",marginTop:"10px"}}
            className="close-button"
            onClick={() => setSelectedPodcast(null)}
          >
            ✖ 
          </button>
          <h2>{selectedPodcast.title}</h2>
          <audio controls autoPlay>
            <source src={selectedPodcast.audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <p>{selectedPodcast.description}</p>
          <p>
            In this episode, we dive deeper into the untold stories of the haunted forest, where mysterious events unfold under the moonlight. Join us as we explore chilling eyewitness accounts of eerie creatures and unexplained phenomena.
          </p>
          <p>
            The foggy woods seem to have a mind of their own, and those who venture too far into its depths rarely return. Tune in for a spine-tingling journey through the darkest corners of the world.
          </p>
        </div>
      )}
    </div>
  );
};

export default HorrorPodcasts;

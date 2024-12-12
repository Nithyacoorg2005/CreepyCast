import React from 'react';
import './App.css'
import {  Routes, Route, BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Signup from './Signup'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import AudiobooksPage from './Components/AudiobooksPage/AudiobooksPage';
import NewReleasePage from './Components/NewReleasePage/NewReleasePage';
import ClassicHorrorPage from './Components/ClassicHorrorPage/ClassicHorrorPage';
import ModernMoviePage from './Components/ModernMoviePage/ModernMoviePage';
import ThrillersPage from './Components/ThrillersPage/ThrillersPage';
import SeriesPage from './Components/SeriesPage/SeriesPage';
import MiniSeriesPage from './Components/MiniSeriesPage/MiniSeriesPage';
import Anthologies from './Components/Anthologies/Anthologies';
import HorrorPodcasts from './Components/HorrorPodcasts/HorrorPodcasts';
import Footer from './Components/Footer/Footer';
import RealHorrorStories from './Components/RealHorrorStories/RealHorrorStories';
import VideoPodcastsPage from './Components/VideoPodcasts/VideoPodcastsPage';

const App = () => {

  return (
    <>
  
 
    <BrowserRouter>
    
    <Navbar/>
 
    <Routes>
    

     
     
      
    
      <Route path="/signup" element={Signup}/>
      <Route path="/main" element={<><Navbar/><HomePage/><Footer/></>}/>
      <Route path="/" element={<Signup />} />
      <Route path="/genres" element={<><AudiobooksPage/><Footer/></>}/>
      <Route path="/new-releases" element={<><NewReleasePage/><Footer/></>}/>
      <Route path="/classics" element={<><ClassicHorrorPage/><Footer/></>}/>
      <Route path="/modern" element={<><ModernMoviePage/><Footer/></>}/>
      <Route path="/thrillers" element={<><ThrillersPage/><Footer/></>}/>
      <Route path="/series" element={<><SeriesPage/><Footer/></>}/>
      <Route path="/horrorstories" element={<><RealHorrorStories/><Footer/></>}/>
      <Route path="/anthologies" element={<><Anthologies/><Footer/></>}/>
      <Route path="/podcasts" element={<><HorrorPodcasts/><Footer/></>}/>
      <Route path="/videopodcasts" element={<><VideoPodcastsPage/><Footer/></>}/>
     
    
   
    </Routes>



  
    </BrowserRouter>
    </>
  );
};

export default App;
import React, { useState, useRef, useEffect } from "react";
import "./RealHorrorStories.css";

const RealHorrorStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  
  const horrorStories = [
    {
      id: 1,
      title:
        "The Vallecas Haunting: The True Story Behind The Movie Veronica| Documentary",
      description:
        "The year was 1990. In Madrid, Spain, Concepción Gutiérrez  father lay dying in hospital. Concepción had gathered her children, including teenage Estefanía, to see their grandfather one last time. What happened next is said to have led to a terrifying haunting and a paranormal possession.",
      videoUrl: "https://youtube.com/embed/5W9p4KyvAoU",
    },
    {
      id: 2,
      title: "Annabelle the Doll: The Origins | Documentary",
      description:
        "Made famous by Ed and Lorraine Warren, who first discovered the possessed doll, the allegedly true story of Annabelle has inspired a book, and two of the films from The Conjuring film franchise. On the silver screen Annabelle is an prized antique doll that plagues the living with death and despair. Yet, the real Annabelle looks far less menacing. She is in fact a Raggedy Ann doll, one of many that has been mass-produced. In this particular doll, however, it has been said, that a dark demon lies - an inhuman demonic entity which possesses the desire to inflict pain. But is the story of Annabelle real? And can the Warrens be trusted?",
      videoUrl: "https://youtube.com/embed/GX0f3_SAFnw",
    },
    {
      id: 3,
      title:
        "The Real Amityville Horror: Unveiling the Terror Behind the Fiction | Documentary",
      description:
        "The Amityville case affected our personal lives more than any case we ever worked on.- Lorraine Warren The Paranormal Scholar presents the truth behind the legendary Amityville Horror film franchise. There is more to this tale than meets the eye: the mystifying and chilling details of Ronald DeFeo Jr.'s crimes; the horrifying account of the subsequent haunting of the Lutz family; and new revelations by Daniel Lutz. Prepare for the 2017 release of Amityville: The Awakening by discovering the real story behind Ed and Lorraine Warren’s visit to 112 Ocean Avenue. Including testimonials, photos and interviews, analysed and explained.",
      videoUrl: "https://youtube.com/embed/QXFPCFHZ44w",
    },
    {
      id: 4,
      title: "Elisa: The Documentary",
      description:
        "Some have sensationally dubbed it “the most mysterious case of the 21st century”. Yet, how much do we actually know about Elisa Lam's bizarre, possibly paranormal-related, death? In this paranormal documentary, the Paranormal Scholar presents the humanised story of an intelligent and passionate young woman, who perished under mysterious circumstances in early 2013 at the Cecil Hotel of Los Angeles. Although Elisa's death was described as accidental by the police, many have been left unsatisfied in the months and years which followed. Various alternative theories have been put forward. We aim to outline - and where possible - disprove these theories, always providing evidence as we do. What happened in that hotel? Is this a case of true crime, true horror, or a tragic accident?",
      videoUrl: "https://youtube.com/embed/yda8zcCCx1Q",
    },
    {
      id: 5,
      title:
        "The Vallecas Haunting: The True Story Behind The Movie Veronica| Documentary",
      description:
        "The year was 1990. In Madrid, Spain, Concepción Gutiérrez  father lay dying in hospital. Concepción had gathered her children, including teenage Estefanía, to see their grandfather one last time. What happened next is said to have led to a terrifying haunting and a paranormal possession.",
      videoUrl: "https://youtube.com/embed/5W9p4KyvAoU",
    },

    {
      id: 6,
      title:
        "The Vallecas Haunting: The True Story Behind The Movie Veronica| Documentary",
      description:
        "The year was 1990. In Madrid, Spain, Concepción Gutiérrez  father lay dying in hospital. Concepción had gathered her children, including teenage Estefanía, to see their grandfather one last time. What happened next is said to have led to a terrifying haunting and a paranormal possession.",
      videoUrl: "https://youtube.com/embed/5W9p4KyvAoU",
    },
  ];

  const handleWatchStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
    setTimeout(() => {
      videoRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  return (
    <div className="real-horror-stories">

      <section className="hero-section">
        <h1>Real Horror Stories 🎥</h1>
       
      
      </section>

     
      <section className="stories-list">
        {horrorStories.map((story) => (
          <div key={story.id} className="story-card">
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <button onClick={() => handleWatchStory(story)}>
              Watch Story ▶️
            </button>
          </div>
        ))}
      </section>

     
      {isModalOpen && selectedStory && (
        <div className="modal" onClick={handleCloseModal}>
          <div
            className="modal-content"
            ref={videoRef}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedStory.title}</h2>
            <iframe
              width="100%"
              height="400"
              src={selectedStory.videoUrl}
              title={selectedStory.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button style={{width:"75px",marginTop:"-5px"}} className="close-button" onClick={handleCloseModal}>
              Close 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RealHorrorStories;

import React, { useState, useRef } from "react";
import "./AudiobooksPage.css";

const audiobooks = [
  {
    id: 1,
    title: "Knife in the Dark",
    author: "Ron Ripley",
    coverImage: "https://th.bing.com/th/id/OIP.CpZASHabf_aJ5AS9wb8PHwHaHa?rs=1&pid=ImgDetMain",
    ratings: 4.5,
    price: "$129.99",
    audioFile: "/videos/dancing-in-the-stardust-free-music-no-copyright-203603.mp3",
    description: "A chilling story that explores the boundaries of the supernatural..."
  },
  {
    id: 2,
    title: "Ghosts of the Night",
    author: "Anita Krishnan",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578054075i/50260404.jpg",
    ratings: 4.7,
    price: "$335.99",
    audioFile: "/videos/dancing-in-the-stardust-free-music-no-copyright-203603.mp3",
    description: "A haunted mansion holds secrets of its past..."
  },
  {
    id: 3,
    title: "When no one is watching",
    author: " Alyssa Cole",
    coverImage: "https://s2982.pcdn.co/wp-content/uploads/2020/04/when-no-one-is-watching.png.webp",
    ratings: 4.9,
    price: "$255.80",
    audioFile: "/videos/dancing-in-the-stardust-free-music-no-copyright-203603.mp3",
    description: "A haunted mansion holds secrets of its past..."
  },
   {
    id: 4,
    title: "The only good Indians",
    author: "Stephen Graham Jones",
    coverImage: "https://s2982.pcdn.co/wp-content/uploads/2020/11/The-Only-Good-Indians.jpg.webp",
    ratings: 4.,
    price: "$95.99",
    audioFile: "/videos/dancing-in-the-stardust-free-music-no-copyright-203603.mp3",
    description: "The way animals and revenge are intertwined in this story, it really made me think of Drive Your Plow Over The Bones Of The Dead by Olga Tokarczuk, which I read for a book club this year and loved. "
  },
  {
    id: 5,
    title: "Red Pill",
    author: "Hari Kunzru",
    coverImage: "https://s2982.pcdn.co/wp-content/uploads/2020/11/Red-Pill.jpg.webp",
    ratings: 4.5,
    price: "$5.99",
    audioFile: "/videos/dancing-in-the-stardust-free-music-no-copyright-203603.mp3",
    description: "A haunted mansion holds secrets of its past..."
  }
  
];

const AudiobooksPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState({});
  const [modalStage, setModalStage] = useState("payment"); // 'payment' or 'audio'
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [userInput, setUserInput] = useState({ cardNumber: "", cvv: "", upi: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const audioRef = useRef(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setModalStage("payment");
  };

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentStatus((prev) => ({
        ...prev,
        [selectedBook.id]: true
      }));
      setModalStage("audio");
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 500); 
    }, 1000);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setModalStage("payment");
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = audiobooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
 
  
    <div style={{marginTop:"150px",}} className="audiobooks-page">
         
         <section  className="search-section">
        <input style={{height:"45px",width:"250px"}}
          type="text"
          placeholder="Search for an audiobook..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </section>
      <section style={{color:"black",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"30px",marginTop:"150px",marginRight:"200px"}} className="audiobook-grid">
      {filteredBooks.map((book) => (
    <div style={{color:"#fff",border:"1px solid white"}} className="audiobook-card" key={book.id}>
      <img  style={{width:"150px",height:"150px",marginLeft:"40px",marginTop:"10px",borderRadius:"8px"}} src={book.coverImage} alt={book.title} />
      <h3 style={{marginLeft:"20px"}}>{book.title}</h3>
      <p style={{marginLeft:"20px"}}>{book.author}</p>
      <p style={{marginLeft:"20px"}}>Rating: {book.ratings} ⭐</p>
      <p style={{marginLeft:"20px"}}>Price: {book.price}</p>
      <button style={{marginLeft:"20px"}}
        className="buy-btn"
        onClick={() => handleOpenModal(book)}
      >
        Buy Now
      </button>
    </div>
        ))}
      </section>

      {selectedBook && (
        <div  style={{color:"black"}}className="payment-modal-backdrop" onClick={handleCloseModal}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            {modalStage === "payment" && (
              <>
                <h3>Select Payment Method</h3>
                <div  className="payment-methods">
                  <button  style={{color:"black"}}onClick={() => setPaymentMethod("UPI")}>UPI</button>
                  <button style={{color:"black"}} onClick={() => setPaymentMethod("Card")}>Card</button>
                </div>
                {paymentMethod === "UPI" && (
                  <div>
                    <label>Enter UPI ID:</label>
                    <input
                      type="text"
                      value={userInput.upi}
                      onChange={(e) =>
                        setUserInput({ ...userInput, upi: e.target.value })
                      }
                    />
                  </div>
                )}
                {paymentMethod === "Card" && (
                  <>
                    <div>
                      <label>Enter Card Number:</label>
                      <input
                        type="text"
                        value={userInput.cardNumber}
                        onChange={(e) =>
                          setUserInput({ ...userInput, cardNumber: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label>Enter CVV:</label>
                      <input
                        type="text"
                        value={userInput.cvv}
                        onChange={(e) =>
                          setUserInput({ ...userInput, cvv: e.target.value })
                        }
                      />
                    </div>
                  </>
                )}
                {paymentMethod && (
                  <button onClick={handlePayment}>
                    Process Payment
                  </button>
                )}
              </>
            )}

            {modalStage === "audio" && (
              <div className="audio-player-container">
                <h2>{selectedBook.title}</h2>
                <p>{selectedBook.author}</p>
                <p>{selectedBook.description}</p>
                <audio
                  ref={audioRef}
                  src={selectedBook.audioFile}
                  controls
                  autoPlay
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, #ff7eb3, #ff758c)",
                    color: "white",
                    borderRadius: "10px",
                   
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
  </div>

  );
};

export default AudiobooksPage;

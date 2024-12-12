import React, { useState } from "react";
import { motion } from "framer-motion";
import "./NewReleasePage.css";

const NewReleasePage = () => {
  const newReleases = [
    {
      id: 1,
      coverImage: "https://m.media-amazon.com/images/I/61mM-YiZOrL._SL250_.jpg",
      title: "The Horror of the Links",
      price: "$1520.360",
      para: "Supernatural French detective Dr. Jules de Grandin investigated cases involving monsters, devil worshippers, serial killers, and spirits from beyond the grave....",
      isPremium: true,
    },
    {
      id: 2,
      coverImage: "https://m.media-amazon.com/images/I/61vP1pvlkXL._SL250_.jpg",
      title: "Red Fox",
      price: "$189.989",
      para: "In the forgotten town of Red Fox, a Navajo couple is tortured by things unseen and by motives unknown. Wild animals slink through their house in the dark....",
      isPremium: true,
    },
    {
      id: 3,
      coverImage: "https://m.media-amazon.com/images/I/61MPHV8YA4L._SL250_.jpg",
      title: "Out There Screaming",
      price: "$195.569",
      para: "From Jordan Peele, the director of Get Out, comes an anthology of brand new stories showcasing the best Black talent from across contemporary horror writing.",
      isPremium: true,
    },
    {
      id: 4,
      coverImage: "https://m.media-amazon.com/images/I/617FolwK4EL._SL500_.jpg",
      title: "Astabal (Hindi Edition)",
      price: "$95.569",
      para: "अस्तबल में नीलोत्पल मृणाल नए मुखर्जी नगर की वास्तविक झलक दिखाते हैं, जहाँ UPSC  CSAT के नए पैटर्न अस्तबल इन्हीं संघर्षों का इमानदार दस्तावेज़ है।",
      isPremium: true,
    },
    {
      id: 5,
      coverImage: "https://m.media-amazon.com/images/I/51do4z8x8hL._SL500_.jpg",
      title: "The Answer Is No",
      price: "$195.569",
      para: "Lucas knows the perfect night entails just three things: video games, wine, and pad thai. Peanuts are a must! Other people? Not so much. Why complicate things when he’s happy alone? Then one day the apartment board, a vexing trio of authority, rings his doorbell. And Lucas’s solitude takes a startling hike. ",
      isPremium: true,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [upiNumber, setUpiNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
    setPaymentMethod(null);
    setUpiNumber("");
    setCardNumber("");
    setCvv("");
    setExpiryDate("");
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePurchase = () => {
    setShowModal(false);
    setShowThankYouModal(true);
  };

  const handlePlayAudiobook = () => {
    setShowThankYouModal(false);
    setShowAudioPlayer(true);
  };

  const closeAudioModal = () => {
    setShowAudioPlayer(false);
  };

  return (
    <div style={{ marginTop: "100px" }} className="new-release-page">
      <div
        style={{ color: "black", marginLeft: "200px" }}
        className="new-releases"
      >
        <h2 style={{ color: "#fff" }}>📚 New Releases</h2>
        {newReleases.map((book) => (
          <div className="release-item" key={book.id}>
            <div style={{ display: "inline-flex" }} className="book-details">
              <img
                style={{
                  width: "180px",
                  height: "200px",
                  borderRadius: "10px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
                src={book.coverImage}
                alt=""
              />
              <div className="details">
                <h3
                  style={{
                    marginLeft: "50px",
                    fontSize: "25px",
                    color: "#fff",
                  }}
                >
                  {book.title}
                </h3>
                <p style={{ marginLeft: "50px", color: "#fff" }}>
                  Price: {book.price}
                </p>
                <p style={{ marginLeft: "50px", color: "#fff" }}>{book.para}</p>
                {book.isPremium && (
                  <motion.button
                    style={{ marginLeft: "50px", borderColor: "#fff" }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => openModal(book)}
                  >
                    Buy Now
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Payment Options</h2>
            <p>
              You're purchasing: <strong>{selectedBook?.title}</strong>
            </p>
            <div style={{ marginTop: "30px" }} className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  onChange={() => handlePaymentMethodChange("upi")}
                />
                UPI
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={() => handlePaymentMethodChange("card")}
                />
                Card
              </label>
            </div>

            {/* UPI or Card Input */}
            {paymentMethod === "upi" && (
              <div style={{ marginTop: "30px" }}>
                <label>
                  UPI Number:
                  <input
                    type="text"
                    value={upiNumber}
                    onChange={(e) => setUpiNumber(e.target.value)}
                  />
                </label>
              </div>
            )}

            {paymentMethod === "card" && (
              <div>
                <label>
                  Card Number:
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </label>
                <label>
                  Expiry Date:
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </label>
              </div>
            )}

            <button
              style={{ marginTop: "50px" }}
              onClick={handlePurchase}
              className="modal-button"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowThankYouModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Thank You for Your Purchase!</h2>
            <p>You're all set to enjoy your audiobook.</p>
            <button onClick={handlePlayAudiobook} className="modal-button">
              Play Audiobook
            </button>
          </div>
        </div>
      )}

      {/* Audio Player Modal */}
      {showAudioPlayer && (
        <div className="modal-overlay" onClick={closeAudioModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBook?.title}</h2>
            <audio controls>
              <source
                src="/videos/tell-me-the-truth-260010.mp3"
                type="audio/mp3"
              />
              Your browser does not support the audio element.
            </audio>

            <button style={{width:"100px"}} onClick={closeAudioModal} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewReleasePage;

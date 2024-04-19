import React, { useState } from "react";
import "../css/Card.css";
import "../css/OrderButton.css";
import { Card as CardModel } from "../models/CardModel"; // Adjust the path to where you store your models
import ButtonComponent from "./ButtonComponent";
import TimeSelectModal from "./TimeSelectModal";

interface CardProps {
  card: CardModel; // Use the imported Card interface
}

function renderStars(rating = 0) {
  const totalStars = 5;
  let stars = [];
  for (let i = 1; i <= totalStars; i++) {
    const filledPercentage = Math.max(0, Math.min(100, (rating - i + 1) * 100));
    stars.push(
      <span key={i} className="star">
        ★
        <span className="filled" style={{ width: `${filledPercentage}%` }}>
          ★
        </span>
      </span>
    );
  }
  return stars;
}

function Card({ card }: CardProps) {
  const { name, views, picture, rating } = card;
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSelectTime = (time: string) => {
    // Define type here
    console.log("Time selected:", time);
    handleCloseModal();
  };

  return (
    <div className="card">
      <img src={picture} alt={name} className="card-image" />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{views} views</p>
        <div className="card-rating">
          {renderStars(rating)}
          <span className="rating-number">({rating.toFixed(1)})</span>
        </div>
        {/* Button to open modal */}
        <ButtonComponent label="Order Tickets" onClick={handleOpenModal} />
        {/* Modal for selecting time */}
        <TimeSelectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectTime={handleSelectTime}
        />
      </div>
    </div>
  );
}

export default Card;

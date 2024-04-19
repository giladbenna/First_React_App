import React, { useState, useEffect } from "react";
import { Card as CardModel } from "../models/CardModel";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";
import fetchCards from "../services/CardService";
import "../css/CardGrid.css";
import CardComponent from "./Card";

function CardGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cards, setCards] = useState<CardModel[]>([]);

  useEffect(() => {
    fetchCards().then(setCards).catch(console.error);
  }, []);

  const filteredCards = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || card.category === selectedCategory)
  );

  return (
    <div className="main-content">
      <CategoryBar onSelectCategory={setSelectedCategory} />
      <div className="right-content">
        <SearchBar onSearch={setSearchTerm} />
        {filteredCards.length > 0 ? (
          <div className="card-grid">
            {filteredCards.map((card) => (
              <CardComponent key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  );
}

export default CardGrid;

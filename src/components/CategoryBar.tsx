import React, { useState, useEffect } from "react";
import { fetchCategories } from "../services/CategoryService"; // Ensure this path is correct based on your project structure

interface CategoryBarProps {
  onSelectCategory: (category: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        setError("Failed to load categories.");
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="category-bar">
      <header>
        <h1>Categories</h1>
      </header>
      {error && <p>{error}</p>}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;

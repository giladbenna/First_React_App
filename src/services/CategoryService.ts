// This module handles fetching categories from a JSON file.

export const fetchCategories = async (): Promise<string[]> => {
    try {
      const response = await fetch("/data/categories.json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      throw error; // Rethrow to handle it in the component
    }
  };
  
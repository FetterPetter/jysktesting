// application.tsx
import React, { useState } from "react";
import { categories } from "../data"; // Import the categories data
import Category from "../category"; // Import Category component

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container">
      <h1 className="header">Jysk tutorial</h1>
      <div className="button-container">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`button ${selectedCategory === category ? "active" : ""}`}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category,
              )
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display selected category items */}
      {selectedCategory && (
        <div className="grid">
          {/* Make sure the selected category is valid */}
          <Category items={categories[selectedCategory]} />
        </div>
      )}
    </div>
  );
};

export default App;

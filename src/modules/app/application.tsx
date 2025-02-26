import React, { useState } from "react";
import { categories } from "../data";
import Category from "../category";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="container">
      <h1 className="header">Jysk Håndbok</h1>
      <div className="button-container">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="grid">
          <Category items={categories[selectedCategory]} />
        </div>
      )}
    </div>
  );
};

export default App;

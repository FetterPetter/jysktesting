import React, { useState } from "react";
import { Item } from "./data";
import ItemCard from "./itemcard";
import { kategoriOrder, extractFirmness } from "../utils/sortHelpers";

interface CategoryProps {
  items: Item[];
}

const Category: React.FC<CategoryProps> = ({ items }) => {
  const [sortMode, setSortMode] = useState<"kategori" | "firmness">("kategori");
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("ascending");

  // State for checkboxes (all checked by default)
  const [selectedCategories, setSelectedCategories] = useState({
    Gold: true,
    Plus: true,
    Basic: true,
  });

  // Handle checkbox toggle
  const handleCheckboxChange = (category: "Gold" | "Plus" | "Basic") => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category], // ✅ Now TypeScript knows 'category' is a valid key
    }));
  };

  // Filter items based on selected categories
  const filteredItems = items.filter(
    (item) => selectedCategories[item.kategori as "Gold" | "Plus" | "Basic"], // Fix type issue here
  );

  // Sort items after filtering
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortMode === "kategori") {
      const aOrder = kategoriOrder[a.kategori] || 99;
      const bOrder = kategoriOrder[b.kategori] || 99;
      return aOrder - bOrder;
    } else if (sortMode === "firmness") {
      const aFirmness = extractFirmness(a.details.core);
      const bFirmness = extractFirmness(b.details.core);

      // Toggle sorting direction: ascending or descending
      if (sortDirection === "ascending") {
        return aFirmness - bFirmness; // Fast -> Myk
      } else {
        return bFirmness - aFirmness; // Myk -> Fast
      }
    }
    return 0;
  });

  // Handle the toggle of sorting direction for firmness
  const toggleFirmnessSort = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending",
    );
    setSortMode("firmness"); // Ensure it's sorting by firmness
  };

  return (
    <div>
      {/* Checkbox Controls */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {["Gold", "Plus", "Basic"].map((category) => (
          <label
            key={category}
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              marginBottom: "10px",
              transition: "all 0.3s ease",
            }}
          >
            <input
              type="checkbox"
              checked={
                selectedCategories[category as keyof typeof selectedCategories]
              }
              onChange={() =>
                handleCheckboxChange(category as "Gold" | "Plus" | "Basic")
              } // Fix type issue here
              style={{
                transform: "scale(1.5)", // Makes checkbox bigger
                marginRight: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease", // Smooth transition effect
              }}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Sorting Buttons */}
      <div
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={toggleFirmnessSort} // Toggling the sorting order
          style={{
            backgroundColor: "#28a745", // Green color
            color: "white",
            border: "none",
            padding: "14px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background 0.3s",
            width: "150px",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#1e7e34")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          {sortDirection === "ascending" ? "Fast til Myk" : "Myk til Fast"}
        </button>
      </div>

      {/* Filtered and Sorted Items */}
      <div className="grid">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
              color: "gray",
              padding: "20px",
            }}
          >
            No items available for the selected categories.
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;

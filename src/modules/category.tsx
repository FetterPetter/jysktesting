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
  const [selectedCategories, setSelectedCategories] = useState({
    Gold: true,
    Plus: true,
    Basic: true,
  });
  const [selectedFirmness, setSelectedFirmness] = useState<
    "Myk" | "Medium" | "Fast" | "all"
  >("all");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleCheckboxChange = (category: "Gold" | "Plus" | "Basic") => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleFirmnessChange = (
    firmness: "Myk" | "Medium" | "Fast" | "all",
  ) => {
    setSelectedFirmness(firmness);
  };

  const filteredItems = items
    .filter(
      (item) => selectedCategories[item.kategori as "Gold" | "Plus" | "Basic"],
    )
    .filter((item) => {
      if (selectedFirmness === "all") return true;
      return item.details.firmness === selectedFirmness;
    });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortMode === "kategori") {
      const aOrder = kategoriOrder[a.kategori] || 99;
      const bOrder = kategoriOrder[b.kategori] || 99;
      return aOrder - bOrder;
    } else if (sortMode === "firmness") {
      const aFirmness = extractFirmness(a.details.firm);
      const bFirmness = extractFirmness(b.details.firm);
      if (sortDirection === "ascending") {
        return aFirmness - bFirmness; // Fast -> Myk
      } else {
        return bFirmness - aFirmness; // Myk -> Fast
      }
    }
    return 0;
  });

  const toggleFirmnessSort = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending",
    );
    setSortMode("firmness");
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
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
              }
              style={{
                transform: "scale(2)",
                marginRight: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Firmness Filter Buttons */}
      <div
        style={{
          marginBottom: "1rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {["Myk", "Medium", "Fast"].map((firmness) => (
          <button
            key={firmness}
            onClick={() =>
              handleFirmnessChange(firmness as "Myk" | "Medium" | "Fast")
            }
            style={{
              backgroundColor:
                selectedFirmness === firmness ? "#007bff" : "#28a745",
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
              (e.currentTarget.style.backgroundColor =
                selectedFirmness === firmness ? "#007bff" : "#28a745")
            }
          >
            {firmness.charAt(0).toUpperCase() + firmness.slice(1)}
          </button>
        ))}
        <button
          onClick={() => handleFirmnessChange("all")}
          style={{
            backgroundColor: selectedFirmness === "all" ? "#ff7f50" : "#28a745",
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
        >
          All
        </button>
      </div>

      {/* Sorting Button */}
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
          onClick={toggleFirmnessSort}
          style={{
            backgroundColor:
              sortDirection === "ascending" ? "#28a745" : "#dc3545",
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
            (e.currentTarget.style.backgroundColor =
              sortDirection === "ascending" ? "#1e7e34" : "#c82333")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              sortDirection === "ascending" ? "#28a745" : "#dc3545")
          }
        >
          {sortDirection === "ascending" ? "Myk til Fast" : "Fast til Myk"}
        </button>
      </div>

      {/* Filtered and Sorted Items */}
      <div className="grid">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <div key={item.id} onClick={() => handleItemClick(item)}>
              <ItemCard item={item} />
            </div>
          ))
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

      {/* Display more information when an item is selected */}
      {selectedItem && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f1f1f1",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          {/* You can add more item details here */}
        </div>
      )}
    </div>
  );
};

export default Category;

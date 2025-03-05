import React, { useState } from "react";
import { Item } from "./data";
import ItemCard from "./itemcard";
import { extractFirmness } from "../utils/sortHelpers";

interface CategoryProps {
  items: Item[];
}

const Category: React.FC<CategoryProps> = ({ items }) => {
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("ascending");

  const [selectedFirmness, setSelectedFirmness] = useState<
    "Myk" | "Medium" | "Fast" | "all"
  >("all");
  const handleFirmnessChange = (
    firmness: "Myk" | "Medium" | "Fast" | "all",
  ) => {
    if (selectedFirmness === firmness) {
      setSelectedFirmness("all");
    } else {
      setSelectedFirmness(firmness);
    }
  };

  const filteredItems = items.filter((item) => {
    if (selectedFirmness === "all") return true;
    return item.details.firmness === selectedFirmness;
  });
  const sortedItems = [...filteredItems].sort((a, b) => {
    const aFirmness = extractFirmness(a.details.firm);
    const bFirmness = extractFirmness(b.details.firm);
    if (sortDirection === "ascending") {
      return aFirmness - bFirmness;
    } else {
      return bFirmness - aFirmness;
    }
  });

  const toggleFirmnessSort = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending",
    );
  };

  return (
    <div>
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
          >
            {firmness.charAt(0).toUpperCase() + firmness.slice(1)}
          </button>
        ))}
        <button
          onClick={() => handleFirmnessChange("all")}
          style={{
            backgroundColor: selectedFirmness === "all" ? "#007bff" : "#28a745",
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
            width: "150px",
          }}
        >
          {sortDirection === "ascending" ? "Myk til Fast" : "Fast til Myk"}
        </button>
      </div>

      <div className="grid">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <div key={item.id}>
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
    </div>
  );
};

export default Category;

import React, { useState } from "react";
import { Item } from "../data";
import ItemCard from "./itemcard";
import { extractFirmness } from "../../utils/sortHelpers";

interface CategoryProps {
  items: Item[];
}

const Category: React.FC<CategoryProps> = ({ items }) => {
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending" | null
  >(null);
  const [sortByAlphabet, setSortByAlphabet] = useState<
    "ascending" | "descending" | null
  >(null);
  const [selectedFirmness, setSelectedFirmness] = useState<
    "Myk" | "Medium" | "Fast" | "all"
  >("all");

  const handleFirmnessChange = (
    firmness: "Myk" | "Medium" | "Fast" | "all",
  ) => {
    setSelectedFirmness(firmness === selectedFirmness ? "all" : firmness);
  };

  const toggleFirmnessSort = () => {
    if (sortByAlphabet) {
      setSortByAlphabet(null);
      setSortDirection("ascending");
    } else {
      setSortDirection((prev) =>
        prev === "ascending" ? "descending" : "ascending",
      );
    }
  };

  const toggleAlphabetSort = () => {
    if (sortDirection) {
      setSortDirection(null);
      setSortByAlphabet("ascending");
    } else {
      setSortByAlphabet((prev) =>
        prev === "ascending" ? "descending" : "ascending",
      );
    }
  };

  const filteredItems = items.filter((item) =>
    selectedFirmness === "all"
      ? true
      : item.details.firmness === selectedFirmness,
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortByAlphabet) {
      return sortByAlphabet === "ascending"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortDirection) {
      const aFirmness = extractFirmness(a.details.firm);
      const bFirmness = extractFirmness(b.details.firm);
      return sortDirection === "ascending"
        ? aFirmness - bFirmness
        : bFirmness - aFirmness;
    }
    return 0;
  });

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
              fontFamily: "Fira Sans",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s",
              width: "150px",
            }}
          >
            {firmness}
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
            fontFamily: "Fira Sans",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background 0.3s",
            width: "150px",
          }}
        >
          Alle
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
              sortDirection === "ascending"
                ? "#17a2b8"
                : sortDirection === "descending"
                  ? "#ffc107"
                  : "#6c757d",
            color: "white",
            border: "none",
            padding: "14px 24px",
            fontSize: "18px",
            fontFamily: "Fira Sans",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            width: "150px",
          }}
        >
          {sortDirection === "ascending"
            ? "Myk til Fast"
            : sortDirection === "descending"
              ? "Fast til Myk"
              : "Sorter Fasthet"}
        </button>

        <button
          onClick={toggleAlphabetSort}
          style={{
            backgroundColor:
              sortByAlphabet === "ascending"
                ? "#17a2b8"
                : sortByAlphabet === "descending"
                  ? "#ffc107"
                  : "#6c757d",
            color: "white",
            border: "none",
            padding: "14px 24px",
            fontSize: "18px",
            fontFamily: "Fira Sans",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            width: "150px",
          }}
        >
          {sortByAlphabet === "ascending"
            ? "A til Å"
            : sortByAlphabet === "descending"
              ? "Å til A"
              : "Sorter Alfabetisk"}
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

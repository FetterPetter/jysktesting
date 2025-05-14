import React, { useState } from "react";
import { Item } from "../data";
import ItemCard from "./itemcard";
import { extractFirmness } from "../../utils/sortHelpers";

interface CategoryProps {
  items: Item[];
}

const ALL_SIZES = [
  "70x190",
  "70x200",
  "75x190",
  "75x200",
  "80x200",
  "90x200",
  "90x210",
  "120x200",
  "140x200",
  "150x200",
  "160x200",
  "180x200",
  "180x210",
];

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
  const [selectedSize, setSelectedSize] = useState<string>("all");

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

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    const okFirmness =
      selectedFirmness === "all"
        ? true
        : item.details.firmness === selectedFirmness;
    const okSize =
      selectedSize === "all"
        ? true
        : Array.isArray(item.sizes) && item.sizes.includes(selectedSize);
    return okFirmness && okSize;
  });

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
      {/* Fasthets-filter */}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {["Myk", "Medium", "Fast"].map((f) => (
          <button
            key={f}
            onClick={() => handleFirmnessChange(f as any)}
            style={{
              backgroundColor: selectedFirmness === f ? "#007bff" : "#28a745",
              color: "#fff",
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
            {f}
          </button>
        ))}
        <button
          onClick={() => setSelectedFirmness("all")}
          style={{
            backgroundColor: selectedFirmness === "all" ? "#007bff" : "#28a745",
            color: "#fff",
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
          Alle
        </button>
      </div>

      {/* Felles container for sorteringsknapper + dropdown */}
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
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
            color: "#fff",
            border: "none",
            padding: "14px 24px",
            fontSize: "18px",
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
            color: "#fff",
            border: "none",
            padding: "14px 24px",
            fontSize: "18px",
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

        <select
          value={selectedSize}
          onChange={handleSizeChange}
          style={{
            padding: "14px 20px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            cursor: "pointer",
            minWidth: "180px",
          }}
        >
          <option value="all">Alle størrelser</option>
          {ALL_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Produkt-grid */}
      <div className="item-grid">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <ItemCard key={item.id} item={item} selectedSize={selectedSize} />
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
            Ingen produkter funnet for valgt filterkombinasjon.
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;

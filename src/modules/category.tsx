import React, { useState } from "react";
import { Item } from "./data";
import ItemCard from "./itemcard";
import { kategoriOrder, extractFirmness } from "../utils/sortHelpers";
interface CategoryProps {
  items: Item[];
}

const Category: React.FC<CategoryProps> = ({ items }) => {
  const [sortMode, setSortMode] = useState<"kategori" | "firmness">("kategori");

  const sortedItems = [...items].sort((a, b) => {
    if (sortMode === "kategori") {
      const aOrder = kategoriOrder[a.kategori] || 99;
      const bOrder = kategoriOrder[b.kategori] || 99;
      return aOrder - bOrder;
    } else if (sortMode === "firmness") {
      const aFirmness = extractFirmness(a.details.core);
      const bFirmness = extractFirmness(b.details.core);
      return aFirmness - bFirmness;
    }
    return 0;
  });
  return (
    <div>
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <button
          onClick={() => setSortMode("kategori")}
          style={{
            backgroundColor: "#007bff", // Blue color
            color: "white",
            border: "none",
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            margin: "0 10px",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007bff")
          }
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortMode("firmness")}
          style={{
            backgroundColor: "#28a745", // Green color
            color: "white",
            border: "none",
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
            margin: "0 10px",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#1e7e34")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          Sort by Firmness
        </button>
      </div>

      <div className="grid">
        {sortedItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;

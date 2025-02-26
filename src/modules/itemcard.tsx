import React from "react";
import { Item } from "./data";

interface ItemCardProps {
  item: Item;
}
const categoryColors: Record<string, string> = {
  Gold: "#FFD700", // Gold color
  Plus: "#1E90FF", // DodgerBlue (adjust as needed)
  Basic: "#A9A9A9", // DarkGray (neutral color)
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div
      className="item-card"
      style={{
        border: `3px solid ${categoryColors[item.kategori] || "#ccc"}`,
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <img src={item.url} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <span
        style={{
          display: "inline-block",
          backgroundColor: categoryColors[item.kategori] || "#ccc",
          color: "white",
          fontWeight: "bold",
          padding: "5px 10px",
          borderRadius: "5px",
          marginTop: "5px",
        }}
      >
        {item.kategori}
      </span>
      <ul>
        {Object.entries(item.details).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCard;

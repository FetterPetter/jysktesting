import React, { useState, useEffect, useRef } from "react";
import { Item } from "./data";

interface ItemCardProps {
  item: Item;
}

const categoryColors: Record<string, string> = {
  Gold: "#FFD700",
  Plus: "#1E90FF",
  Basic: "#A9A9A9",
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const [showMessage, setShowMessage] = useState(false);

  const itemCardRef = useRef<HTMLDivElement>(null);

  const [isClicked, setIsClicked] = useState(false);

  const toggleMessage = () => {
    setIsClicked((prev) => !prev);
    setShowMessage((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        itemCardRef.current &&
        !itemCardRef.current.contains(event.target as Node)
      ) {
        setShowMessage(false);
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="item-card"
      ref={itemCardRef}
      style={{
        border: `3px solid ${categoryColors[item.kategori] || "#ccc"}`,
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        position: "relative",
        height: "auto",
        backgroundColor: isClicked ? "#fff" : "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onClick={toggleMessage}
    >
      <img
        src={item.url}
        alt={item.name}
        className="item-image"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />
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

      {/* Dynamically showing details */}
      <ul
        style={{
          flexGrow: 1,
          padding: "0",
          listStyle: "none",
          marginTop: "10px",
        }}
      >
        {Object.entries(item.details).map(([key, value]) => (
          <li key={key} style={{ marginBottom: "8px" }}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>

      {/* Show the message if 'showMessage' state is true */}
      {showMessage && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: `${categoryColors[item.kategori] || "#ccc"}`,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            textAlign: "center",
            zIndex: 1000,
            overflowY: "auto",
            lineHeight: "1.5",
          }}
        >
          <h1
            className="item-name"
            style={{
              position: "fixed",
              top: "20px",
              left: "0",
              right: "0",
              zIndex: "1001",
            }}
          >
            {item.name}
          </h1>
          <ul>
            <li>{item.message}</li>
            <li className="extra-spacing">Salgstriks</li>
            {/* Placeholder for spacing */}
            <li>{item.salg}</li>
          </ul>

          {/* Bottom Items */}
          <ul className="bottom-items">
            <li className="extra-spacing">Mersalgsprodukter</li>
            <li className="bottom-item">Madrassbeskytter, laken, dyne, pute</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

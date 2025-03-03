import React, { useState, useEffect, useRef } from "react";
import { Item } from "./data";

interface ItemCardProps {
  item: Item;
}

const categoryColors: Record<string, string> = {
  Gold: "#FFD700", // Gold color
  Plus: "#1E90FF", // DodgerBlue
  Basic: "#A9A9A9", // DarkGray
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
            padding: "15px",
            borderRadius: "0",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            overflowY: "auto",
            lineHeight: "1.5",
          }}
        >
          <div>
            {" "}
            <h1>{item.name}</h1>
            <ul>
              <li>{item.message}</li>
              <li
                style={{
                  fontSize: "25px",
                }}
              ></li>
              <li>{item.salg}</li>
              <li
                style={{
                  fontSize: "25px",
                }}
              >
                Mersalgsprodukter
              </li>
              <li>Madrassbeskytter, laken, dyne, pute</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

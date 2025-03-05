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
      <img src={item.url} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <span
        style={{
          display: "inline-block",
          backgroundColor: categoryColors[item.kategori] || "#ccc",
          color: "black",
          fontWeight: "bold",
          padding: "5px 10px",
          borderRadius: "5px",
          marginTop: "5px",
        }}
      >
        {item.kategori}
      </span>

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

      {showMessage && (
        <div
          style={{
            position: "fixed",
            top: "22%",
            left: "3%",
            width: "94vw",
            height: "75vh",
            backgroundColor: "#e0f7fa",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1000,
            overflowY: "auto",
            border: `15px solid ${categoryColors[item.kategori] || "#ccc"}`,
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className={"top-items"}>
            <h1
              style={{
                color: `${categoryColors[item.kategori] || "#ccc"}`,
                textShadow: "2px 2px 3px rgba(0,0,0,0.5)",
              }}
            >
              {item.name}{" "}
            </h1>
            <p>{item.message}</p>
          </div>
          <ul>
            <li>Salgstriks</li>
            <li>{item.salg}</li>
          </ul>

          <ul
            className="bottom-items"
            style={{
              border: `5px solid ${categoryColors[item.kategori] || "#ccc"}`,
            }}
          >
            <li
              className="extra-spacing"
              style={{
                color: "darkolivegreen",
              }}
            >
              Mersalgsprodukter:
            </li>
            <li className="bottom-item">Madrassbeskytter, Laken, Dyne, Pute</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

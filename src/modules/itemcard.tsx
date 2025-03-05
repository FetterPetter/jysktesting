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
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: `${categoryColors[item.kategori] || "#ccc"}`,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1000,
            overflowY: "auto",
          }}
        >
          <h1
            style={{
              position: "fixed",
              top: "50px",
              fontSize: "40px",
              zIndex: "1001",
            }}
          >
            {item.name}
          </h1>
          <ul
            style={{
              position: "fixed",
              top: "80px",
            }}
          >
            <li
              style={{
                padding: "30px",
                fontSize: "30px",
              }}
            >
              {item.message}
            </li>
            <li
              style={{
                fontSize: "50px",
              }}
            >
              Salgstriks
            </li>

            <li
              style={{
                fontSize: "25px",
              }}
            >
              {item.salg}
            </li>
          </ul>
          <ul className="bottom-items">
            <li className="extra-spacing">Mersalgsprodukter:</li>
            <li className="bottom-item">Madrassbeskytter, Laken, Dyne, Pute</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

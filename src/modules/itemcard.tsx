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
  // State to toggle message visibility
  const [showMessage, setShowMessage] = useState(false);

  // Ref for the item card to detect clicks outside
  const itemCardRef = useRef<HTMLDivElement>(null);

  // State to track whether the item is clicked (to apply white background)
  const [isClicked, setIsClicked] = useState(false);

  // Toggle function to show the message
  const toggleMessage = () => {
    setIsClicked((prev) => !prev); // Toggle click state
    setShowMessage((prev) => !prev); // Toggle message visibility
  };

  // Close message if clicked outside the item card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        itemCardRef.current &&
        !itemCardRef.current.contains(event.target as Node)
      ) {
        setShowMessage(false); // Close message if clicked outside
        setIsClicked(false); // Reset click state
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div
      className="item-card"
      ref={itemCardRef}
      style={{
        border: `3px solid ${categoryColors[item.kategori] || "#ccc"}`,
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer", // Adds a pointer cursor on hover
        position: "relative", // This ensures the message can be positioned absolutely relative to the card
        height: "auto", // Let the height adjust based on content
        backgroundColor: isClicked ? "#fff" : "#f4f4f4", // White background when clicked, light gray when not clicked
        display: "flex",
        flexDirection: "column", // Flexbox column layout to allow items to stack
        justifyContent: "space-between", // Space out the contents
      }}
      onClick={toggleMessage} // Toggle message visibility and clicked state when clicked
    >
      <img
        src={item.url}
        alt={item.name}
        className="item-image"
        style={{
          width: "100%",
          height: "150px", // Adjust image size as needed
          objectFit: "cover", // Ensures image covers the area without distortion
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
            position: "absolute",
            top: "0", // Cover the entire item card
            left: "0",
            width: "100%",
            height: "100%", // Full height of the item card
            backgroundColor: `${categoryColors[item.kategori] || "#ccc"}`, // Solid background color to cover the item content
            color: "#000", // Dark text color for better contrast, especially for Gold
            display: "flex",
            alignItems: "center", // Center the message vertically
            justifyContent: "center", // Center the message horizontally
            fontSize: "20px", // Increase font size for better readability
            textAlign: "center",
            padding: "15px", // Add padding to avoid text being too close to the edges
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Slight shadow for better visual depth
            zIndex: 10,
            overflowY: "auto", // Make sure the message is scrollable if it's too long
            lineHeight: "1.5", // Improve readability
          }}
        >
          <p
            style={{ margin: 0, textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)" }}
          >
            {item.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

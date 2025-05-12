import React, { useState } from "react";
import { Item } from "../data";
import Modal from "./Modal";

interface ItemCardProps {
  item: Item;
}

const categoryColors: Record<string, string> = {
  Gold: "#FFD700",
  Plus: "#1E90FF",
  Basic: "#A9A9A9",
};

const productDescriptions: Record<string, string> = {
  Madrassbeskytter:
    "En madrassbeskytter beskytter madrassen din mot flekker, skitt og slitasje, og holder den friskere i lengre tid.",
  Laken:
    "Laken gir en komfortabel overflate å sove på, og beskytter samtidig madrassen mot fuktighet.",
  Dyne: "En dyne holder deg varm om natten og gir deg komfort under søvnen. Velg riktig fyll for ønsket temperatur.",
  Pute: "En pute støtter hodet og nakken under søvnen og kan bidra til en mer behagelig natts søvn.",
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null); // Ny state for valgt produkt
  const [isClicked, setIsClicked] = useState(false);

  const toggleMessage = () => {
    setIsClicked((prev) => !prev);
    setShowMessage((prev) => !prev);
    setSelectedProduct(null); // Resett valgt produkt når du åpner modalen
  };

  const handleProductClick = (product: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Forhindrer at eventen bubbler opp og lukker modalen
    setSelectedProduct(product); // Sett valgt produkt
  };

  const handleBackToItems = () => {
    setSelectedProduct(null); // Gå tilbake til hovedmodalen
  };

  const handleCloseModal = () => {
    setShowMessage(false); // Lukk modalen når man klikker på "X"
    setSelectedProduct(null); // Resett valgt produkt når modalen lukkes
  };

  return (
    <>
      <div
        className="item-card"
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
      </div>

      {/* Modalen som vises når showMessage er true */}
      <Modal
        isOpen={showMessage}
        onClose={handleCloseModal}
        title={item.name}
        titleColor={categoryColors[item.kategori] || "#ccc"}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {selectedProduct ? (
            <div>
              <button
                onClick={handleBackToItems}
                style={{
                  backgroundColor: "#ddd",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
              >
                Tilbake
              </button>
              <h4>{selectedProduct}</h4>
              <p>{productDescriptions[selectedProduct]}</p>
            </div>
          ) : (
            <>
              <h4>Detaljer:</h4>
              <p>{item.message}</p>

              {/* 👇 Footer alltid i bunn */}
              <div style={{ marginTop: "auto" }} className="modal-footer">
                <h5>Mersalgsprodukter:</h5>
                <ul>
                  {["Madrassbeskytter", "Laken", "Dyne", "Pute"].map(
                    (product) => (
                      <li
                        key={product}
                        onClick={(e) => handleProductClick(product, e)}
                        style={{
                          cursor: "pointer",
                          marginBottom: "8px",
                          color: "#007bff",
                        }}
                      >
                        {product}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ItemCard;

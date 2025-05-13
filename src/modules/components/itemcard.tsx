import React, { useState } from "react";
import { Item } from "../data";
import Modal from "./Modal";
import { findSimilarItems } from "../../utils/findSimilarItems";

interface ItemCardProps {
  item: Item;
  selectedSize: string;
}

const categoryColors: Record<string, string> = {
  Gold: "#FFD700",
  Plus: "#1E90FF",
  Basic: "#A9A9A9",
};

const productDescriptions: Record<string, string> = {
  Madrassbeskytter:
    "En madrassbeskytter beskytter madrassen din mot flekker, skitt og slitasje, og gjør at den holder lenger",
  Laken: "Det er alltid godt med et nytt laken når man oppgraderer sengen",
  Dyne: "En dyne holder deg varm om natten og gir deg komfort under søvnen. Velg riktig fyll for ønsket temperatur.",
  Pute: "En pute støtter hodet og nakken under søvnen og kan bidra til en mer behagelig natts søvn.",
};

const ItemCard: React.FC<ItemCardProps> = ({ item, selectedSize }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [similarItems, setSimilarItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item>(item);

  const toggleMessage = () => {
    const wasOpen = showMessage;
    setIsClicked(!wasOpen);
    setShowMessage(!wasOpen);

    if (!wasOpen) {
      setCurrentItem(item);

      const candidates = findSimilarItems(item);

      const filteredBySize =
        selectedSize === "all"
          ? candidates
          : candidates.filter(
              (si) =>
                Array.isArray(si.sizes) && si.sizes.includes(selectedSize),
            );

      setSimilarItems(filteredBySize);
    }
  };

  const handleProductClick = (
    product: string | Item,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();

    if (typeof product === "string") {
      setSelectedProduct(product);
    } else {
      setSelectedProduct(null);
      setShowMessage(false);
      setTimeout(() => {
        setCurrentItem(product);
        setSimilarItems(findSimilarItems(product));
        setShowMessage(true);
      }, 0);
    }
  };

  const handleBackToItems = () => {
    setSelectedProduct(null);
  };

  const handleCloseModal = () => {
    setShowMessage(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div
        className="item-card"
        style={{
          border: `3px solid ${categoryColors[item.type] || "#ccc"}`,
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
            backgroundColor: categoryColors[item.type] || "#ccc",
            color: "black",
            fontWeight: "bold",
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "5px",
          }}
        >
          {item.type}
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

      <Modal
        isOpen={showMessage}
        onClose={handleCloseModal}
        title={currentItem.name}
        titleColor={categoryColors[currentItem.type] || "#ccc"}
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
              <ul className="message-list">
                {currentItem.message.split(".").map((sentence, index) => {
                  const trimmed = sentence.trim();
                  if (!trimmed) return null;

                  // Finn posisjonen til første kolon
                  const colonIndex = trimmed.indexOf(":");
                  if (colonIndex !== -1) {
                    const title = trimmed.slice(0, colonIndex + 1); // med kolon
                    const rest = trimmed.slice(colonIndex + 1).trim(); // etter kolon

                    return (
                      <li key={index}>
                        <strong>{title}</strong>
                        <br />
                        {rest}.
                      </li>
                    );
                  } else {
                    // Ingen kolon i setningen – vis hele setningen normalt
                    return <li key={index}>{trimmed}.</li>;
                  }
                })}
              </ul>
              <h5>Lignende produkter:</h5>
              <ul
                style={{
                  paddingLeft: "0",
                  listStyleType: "none",
                }}
              >
                {similarItems.length > 0 ? (
                  similarItems.map((similar) => (
                    <li
                      key={similar.id}
                      onClick={(e) => handleProductClick(similar, e)}
                      style={{
                        cursor: "pointer",
                        marginBottom: "8px",
                        padding: "10px",
                        backgroundColor: categoryColors[similar.type] || "#ccc",
                        color: "black",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}
                    >
                      {similar.name}
                    </li>
                  ))
                ) : (
                  <li>Ingen lignende produkter funnet</li>
                )}
              </ul>
            </>
          )}

          {/* Add this div for the footer */}
          <div style={{ marginTop: "auto" }} className="modal-footer">
            <h5>Mersalgsprodukter:</h5>
            <ul>
              {["Madrassbeskytter", "Laken", "Dyne", "Pute"].map((product) => (
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
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ItemCard;

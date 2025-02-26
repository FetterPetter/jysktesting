import React from "react";
import { Item } from "./data";

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.url} alt={item.name} />
      <h3>{item.name}</h3>
      <ul>
        {Object.keys(item.details).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {item.details[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCard;

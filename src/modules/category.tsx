import React from "react";
import { Item } from "./data";
import ItemCard from "./itemcard";

interface CategoryProps {
  items: Item[];
}

const Category: React.FC<CategoryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Category;

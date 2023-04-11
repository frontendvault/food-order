import React from "react";

const Categories = () => {
  return (
    <div className="mb-8">
      <h3 className="font-black text-rose-400 text-2xl mb-3">Categories</h3>
      <ul className="flex justify-between flex-row w-full">
        <li className="category">All</li>
        <li className="category">Appetizers</li>
        <li className="category">Burger</li>
        <li className="category">Sandwich</li>
        <li className="category">Pizza</li>
        <li className="category">Cold Drinks</li>
        <li className="category">Entrees</li>
        <li className="category">Spagheti</li>
        <li className="category">Bakery</li>
      </ul>
    </div>
  );
};

export default Categories;

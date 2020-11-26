import "./App.css";
import React, { Component, useState } from "react";
import FilteredList from "./FilteredList";
import Cart from "./Cart";

const productList = [
  { id: 0, name: "Tiramisu", type: "Dessert", price: 180 },
  { id: 1, name: "Cheesecake", type: "Dessert", price: 60 },

  { id: 2, name: "Steak", type: "Main", price: 30 },
  { id: 3, name: "Fried Rice", type: "Main", price: 40 },

  { id: 4, name: "Milk tea", type: "Drink", price: 10 },
  { id: 5, name: "Latte", type: "Drink", price: 5 },

  { id: 6, name: "Tuna Tataki", type: "Appetizer", price: 20 },
  { id: 7, name: "Bruschetta", type: "Appetizer", price: 15 },
];

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddCardItem = (cardItem) => {
    setCartItems(cartItems.concat([cardItem]));
  }

  const handleRemoveCardItem = (cartItemIndex) => {
    setCartItems(cartItems.filter((cartItem, index) => cartItemIndex !== index));
  }

  return (
    <div className="d-flex">
      <FilteredList list={productList} onAdd={handleAddCardItem} />
      <div className="mt-4 pt-2">
        <Cart cartItems={cartItems} onRemove={handleRemoveCardItem}/>
      </div>
    </div>
  );
};

export default App;
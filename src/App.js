import "./App.css";
import React, { Component, useState } from "react";
import FilteredList from "./FilteredList";
import Cart from "./Cart";

const productList = [
  { id: 0, name: "Tiramisu", type: "Dessert", price: 10 },
  { id: 1, name: "Cheesecake", type: "Dessert", price: 8 },

  { id: 2, name: "Steak", type: "Main", price: 30 },
  { id: 3, name: "Fried Rice", type: "Main", price: 12 },

  { id: 4, name: "Milk tea", type: "Drink", price: 6 },
  { id: 5, name: "Latte", type: "Drink", price: 4 },

  { id: 6, name: "Tuna Tataki", type: "Appetizer", price: 18 },
  { id: 7, name: "Bruschetta", type: "Appetizer", price: 11 },

  { id: 8, name: "Ice cream", type: "Dessert", price: 3 },
  { id: 9, name: "Apple pie", type: "Dessert", price: 7 },

  { id: 10, name: "Burrito bowl", type: "Main", price: 14 },
  { id: 11, name: "Peking duck", type: "Main", price: 40 },

  { id: 12, name: "Water", type: "Drink", price: 2 },

  { id: 13, name: "Mozzarella sticks", type: "Appetizer", price: 9 },


];

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const handleAddCardItem = (cardItem) => {
    setCartItems(cartItems.concat([{ ...cardItem, id: Date.now() }]));
  };

  const handleRemoveCardItem = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="d-flex">
      <FilteredList list={productList} onAdd={handleAddCardItem} />
      <div className="mt-4 pt-2">
        <Cart cartItems={cartItems} onRemove={handleRemoveCardItem} />
      </div>
    </div>
  );
};

export default App;

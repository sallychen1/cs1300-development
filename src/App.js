import React from "react";
import FilteredList from "./FilteredList";
import Cart from "./Cart";
import "./App.css";

const productList = [
  { id: 0, name: "Tiramisu", type: "Dessert", price: 10},
  { id: 1, name: "Cheesecake", type: "Dessert", price: 8},

  { id: 2, name: "Steak", type: "Main", price: 30 },
  { id: 3, name: "Fried Rice", type: "Main", price: 12 },

  { id: 4, name: "Bubble Tea", type: "Drink", price: 6 },
  { id: 5, name: "Latte", type: "Drink", price: 4 },

  { id: 6, name: "Tuna Tataki", type: "Appetizer", price: 18 },
  { id: 7, name: "Bruschetta", type: "Appetizer", price: 11 },

  { id: 8, name: "Ice Cream", type: "Dessert", price: 3 },
  { id: 9, name: "Apple Pie", type: "Dessert", price: 7 },

  { id: 10, name: "Burrito Bowl", type: "Main", price: 14 },
  { id: 11, name: "Peking Duck", type: "Main", price: 40 },

  { id: 12, name: "Water", type: "Drink", price: 2 },

  { id: 13, name: "Mozzarella Sticks", type: "Appetizer", price: 9 },


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

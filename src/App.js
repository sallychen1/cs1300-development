import React from "react";
import FilteredList from "./FilteredList";
import Cart from "./Cart";
import "./App.css";

const productList = [
  { id: 0, name: "Tiramisu", type: "Dessert", region: "Europe", price: 10},
  { id: 1, name: "Cheesecake", type: "Dessert", region: "America", price: 8},

  { id: 2, name: "Steak", type: "Main", region: "Europe", price: 30 },
  { id: 3, name: "Fried Rice", type: "Main", region: "Asia", price: 12 },

  { id: 4, name: "Bubble Tea", type: "Drink", region: "Asia", price: 6 },
  { id: 5, name: "Latte", type: "Drink", region: "Europe", price: 4 },

  { id: 6, name: "Tuna Tataki", type: "Appetizer", region: "Asia", price: 18 },
  { id: 7, name: "Bruschetta", type: "Appetizer", region: "Europe", price: 11 },

  { id: 8, name: "Ice Cream", type: "Dessert", region: "America", price: 3 },
  { id: 9, name: "Apple Pie", type: "Dessert", region: "America", price: 7 },

  { id: 10, name: "Burrito Bowl", type: "Main", region: "America", price: 14 },
  { id: 11, name: "Peking Duck", type: "Main", region: "Asia", price: 40 },

  { id: 12, name: "Evian", type: "Drink", region: "Europe", price: 7 },

  { id: 13, name: "Mozzarella Sticks", type: "Appetizer", region: "America", price: 9 },


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
    <div className="container-fluid d-flex py-2">
      <FilteredList list={productList} onAdd={handleAddCardItem} />
      <div className="mt-4 pt-2">
        <Cart cartItems={cartItems} onRemove={handleRemoveCardItem} />
      </div>
    </div>
  );
};

export default App;

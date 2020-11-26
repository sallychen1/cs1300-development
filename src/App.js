import './App.css';
import React, { Component } from 'react';
import FilteredList from './FilteredList';


const productList = [
  { id: 0, name: 'Tiramisu', type: 'Dessert', prepTime: 180},
  { id: 1, name: 'Cheesecake', type: 'Dessert', prepTime: 60},

  { id: 2, name: 'Steak', type: 'Main', prepTime: 30},
  { id: 3, name: 'Fried Rice', type: 'Main', prepTime: 40},

  { id: 4, name: 'Milk tea', type: 'Drink', prepTime: 10},
  { name: 'Latte', type: 'Drink', prepTime: 5},
  
  { id: 5, name: 'Tuna Tataki', type: 'Appetizer', prepTime: 20},
  { id: 6, name: 'Bruschetta', type: 'Appetizer', prepTime: 15}

  ];

class App extends Component{
  constructor() {
    super();
    this.state = {
        cartItems:[],
        prepTime:0
    };
  }

render() {
  return (
    <div>
      <FilteredList list={productList} />

    </div>
  );
}
}

export default App;

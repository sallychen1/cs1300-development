import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

class Cart extends Component{
constructor() {
    super();
    this.state = {
        cartItems:[],
        prepTime:0
    };
}

sumTime = (newTime) => {
    this.setState({prepTime: this.state.prepTime + newTime});
};

render() {
    return (
    <div>
        <p>{this.state.prepTime}</p>
    </div>
   );
}
}

export default Cart;
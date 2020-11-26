import React from "react";
import Card from "react-bootstrap/Card";
import "./App.css";
import { Button } from "react-bootstrap";

const Cart = (props) => {
    const { cartItems, onRemove } = props;

    const totalAmount = cartItems.reduce(
        (amount, item) => (amount += item.price),
        0
    );

    return (
        <div className="card-wrapper min-vh-100">
            <Card>
                <div className="container-fluid">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((cartItem, index) => (
                            <div className="row mt-1" key={cartItem.id}>
                                <div className="col-7">{cartItem.name}</div>
                                <div className="col-3">${cartItem.price}</div>
                                <div className="col-2 d-flex">
                                    <Button
                                        onClick={() => onRemove(index)}
                                    > Remove</Button>
                                </div>
                            </div>
                        ))
                    ) : (
                            <div>No items in Cart</div>
                        )}
                    <div className="row mt-5 pt-5">
                        <div className="col-7">Total</div>
                        <div className="col-3">${totalAmount}</div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Cart;

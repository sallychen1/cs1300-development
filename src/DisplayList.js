import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";

const DisplayList = (props) => {
  const {onAdd, list} = props;

  return (
    <div className="card-wrapper">
      {list.map((item) => (
        <Card key={item.id}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Type: {item.type}, Price: {item.price}
            </Card.Text>
            <Button variant="primary" onClick={() => onAdd(item)}>Add</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayList;

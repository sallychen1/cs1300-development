import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";

const DisplayList = (props) => {
  const {onAdd, list} = props;


  return (
    <div className="card-wrapper">
      {list.map((item) => (
        <Card className = "item-card" key={item.id}>
          <Card.Img variant="top" src = {require('./assets/' + item.name + '.png').default} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.type} </Card.Subtitle>
            <Card.Text>${item.price}</Card.Text>
            <Button variant="primary" size="sm" onClick={() => onAdd(item)}>Add to cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>

  );
};

export default DisplayList;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";

const DisplayList = (props) => {
  const { onAdd, list } = props;

  return (
    <div className="card-wrapper">
      {list.map((item) => (
        <Card className="item-card" key={item.id}>
          <Card.Img
            variant="top"
            className="product-image"
            src={require("./assets/" + item.name + ".png").default}
          />
          <Card.Body>
            <div className="product-content">
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.type}{" "}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {item.region}{" "}
              </Card.Subtitle>
              <Card.Text>${item.price}</Card.Text>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <Button variant="primary" size="sm" onClick={() => onAdd(item)} className="btn-block">
                Add to cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DisplayList;

import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

class DisplayList extends Component{


// function handleRemove(id) {
//   console.log(id);
// }

render() {
    return (
        <div class = "card-wrapper">
        {this.props.list.map(item =>
        <Card key={item.id}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Type: {item.type}, Prep time (mins): {item.prepTime}
                </Card.Text>
                <Button variant="primary">Cook</Button>
            </Card.Body>
        </Card>
        )}
      </div>
    );
  }

}




export default DisplayList;

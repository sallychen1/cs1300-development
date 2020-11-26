import React, { Component} from "react";
import DisplayList from './DisplayList';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


const sortTypes = {
	up: {name: 'increasing',fn: (a, b) => a.prepTime - b.prepTime},
	down: {name: 'decreasing',fn: (a, b) => b.prepTime - a.prepTime}
	// default: {name: 'sort: none',fn: (a, b) => a}
};

class FilteredList extends Component{

constructor() {
    super();
    this.state = {
        type: 'All',
        prepTime: 0,
        currentSort: 'up'
    };
  }

onSelectFilter = event => {
    this.setState({
        type: event
    });
}

matchesFilter = item => {
    if(this.state.type === 'All') {
        return true
    } 
    else if (this.state.type === item.type) {
        return true
    } 
    else {
        return false
    }
}

onSelectSort = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === 'down') {
        nextSort = 'up';
        this.props.list.sort((a, b) => (a.prepTime > b.prepTime) ? 1 : -1);
    }
    
    else if (currentSort === 'up') {
        nextSort = 'down';
        this.props.list.sort((a, b) => (a.prepTime < b.prepTime) ? 1 : -1);
    }
    // else if (currentSort === 'default') {
    //     nextSort = 'down';
    // }

    this.setState({currentSort: nextSort});
    
}


// adding
// removing

render() {
    const { currentSort } = this.state;
    return (
        <div>
            {/* <Navbar variant = 'dark'> */}
            <Nav variant="pills">
                <Nav.Item><Nav.Link eventKey='All' onSelect={this.onSelectFilter}>All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='Appetizer' onSelect={this.onSelectFilter}>Appetizer</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='Main' onSelect={this.onSelectFilter}>Main</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='Dessert' onSelect={this.onSelectFilter}>Dessert</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey='Drink' onSelect={this.onSelectFilter}>Drink</Nav.Link></Nav.Item>
                <Button onClick={this.onSelectSort}>Sort by prep time: {sortTypes[currentSort].name}</Button>
            </Nav>
            
            <DisplayList list={this.props.list.filter(this.matchesFilter)}/>
      </div>
    );
  }

}
export default FilteredList;


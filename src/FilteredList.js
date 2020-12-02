import React from "react";
import DisplayList from "./DisplayList";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const sortTypes = {
  up: { name: "increasing", fn: (a, b) => a.price - b.price },
  down: { name: "decreasing", fn: (a, b) => b.price - a.price },
  default: { name: "none", fn: (a, b) => a },
};

const FilteredList = (props) => {
  const { list, onAdd } = props;

  const [type, setType] = React.useState("All");
  const [currentSort, setCurrentSort] = React.useState("default");
  const [productList, setProductList] = React.useState(list);
  const [region, setRegion] = React.useState("All");

  const onSelectFilter = (event) => {
    setType(event);
  };

  const onSelectFilterRegion = (region) => {
    setRegion(region);
  };

  const matchesFilter = (item) => {
    if (type === "All") {
      return true;
    } else if (type === item.type) {
      return true;
    } else {
      return false;
    }
  };

  const matchesFilterRegion = (item) => {
    if (region === "All") {
      return true;
    } else if (region === item.region) {
      return true;
    } else {
      return false;
    }
  };

  const onSelectSort = () => {
    let nextSort;
    if (currentSort === "down") {
      nextSort = "up";
      setProductList(list.slice().sort((a, b) => (a.price > b.price ? 1 : -1)));
    } else if (currentSort === "up") {
      nextSort = "default";
      setProductList(list);
    } else if (currentSort === "default") {
      nextSort = "down";
      setProductList(list.slice().sort((a, b) => (a.price < b.price ? 1 : -1)));
    }

    setCurrentSort(nextSort);
  };

  return (
    <div>
      <div className="mb-1 px-2">
        <Nav variant="pills" defaultActiveKey="All">
          <Nav.Item>
            <Nav.Link eventKey="All" onSelect={onSelectFilter}>
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Appetizer" onSelect={onSelectFilter}>
              Appetizer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Main" onSelect={onSelectFilter}>
              Main
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Dessert" onSelect={onSelectFilter}>
              Dessert
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Drink" onSelect={onSelectFilter}>
              Drink
            </Nav.Link>
          </Nav.Item>
          <Button variant="dark" onClick={onSelectSort}>
            Sort by price: {sortTypes[currentSort].name}
          </Button>
        </Nav>
      </div>
      <div className="px-2">
        <Nav variant="pills" defaultActiveKey="All">
          <Nav.Item>
            <Nav.Link eventKey="All" onSelect={onSelectFilterRegion}>
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="America" onSelect={onSelectFilterRegion}>
              America
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Europe" onSelect={onSelectFilterRegion}>
              Europe
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Asia" onSelect={onSelectFilterRegion}>
              Asia
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <DisplayList
        list={productList.filter(matchesFilter).filter(matchesFilterRegion)}
        onAdd={onAdd}
      />
    </div>
  );
};
export default FilteredList;

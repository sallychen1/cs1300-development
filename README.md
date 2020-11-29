## Organization of components
- App.js.js contains all food product data and handles the add and remove logic for the food items in the cart
- Cart.js models the shopping cart and handles the logic for the total food price 
- DisplayList.js maps each items as to a displayed card
- FilteredList.js.js handles the filtering and sorting logic for the food categories

## How data is passed down through components
- DisplayList.js maps each product from App.js to a Bootstrap Card for render. In addition, onAdd & list are set as props to keep track of add/removal from the cart as well as sorting/filtering. 

- In FilteredList.js, onAdd & list are again set as props to keep track of add/removal from the cart as well as sorting/filtering. Inside the return function, there is an instance of DisplayList.js to renders the filtered and sorted food items by setting the appropriate onAdd & list props.

- In Cart.js, cartItems & onRemove are set as props to keep track of items in the cart. The return function also maps each item added to the cart to a specific format and updates the total price based on items added/removed. 

- App.js brings everything together - inside the return function of App.js, there is an instance of the FilteredList.js and Cart componenets. productList to the FilteredList.js and cartItems to Cart as props.

## How the user trigger state changes

- Users can filter by type by selecting the desired type represented as nav items, sort by price by selecting the desired order on the rightmost button in the navbar, as well as add/remove individual items to a shopping cart on the right and see the total price of items in the cart.  

- Filter by type: I kept track of the selected type as a state in FilteredList.js, which changes dynamically depending on the filter selected. The eventKey allows me to set
this state according to the selected event (filter represented as nav items, in this case)

- Sort by price: Again, I kept track of the currentSort as a state in FilteredList.js, which changes dynamically depending on the sort order selected. Inside onSelectSort(), I had a series of if statements comparing the price so that the correct order is returned and so that the sort order changes dynamically. 

- Add/remove: I kept track of the cart items (represented as arrays) as states in App.js. Then, I handled the add/removal through handleAdd/RemoveCardItem() by using concat() and filter() functions with the item ID (which is unique for every item in the productList) of items added/removed. 

- Total price: I used the reduce() function in Cart.js to update the total price of current items in the cart dynamically. 

## Frameworks used
- React Bootstrap



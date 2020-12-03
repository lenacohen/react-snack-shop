Your README should  detail your application’s architecture: 
Organization of your components
How data is passed down through your components
How user interactions can trigger changes in the state of components

# React.js Snack Shop
For this assignment, I used React.js to create a snack list interface with live filtering and sorting functionality. 

# Components
The app is made of the following components: 
App.jsx - contains the product list and passes it to FilteredList component
FilteredList.jsx - contains filtering/sorting/aggregator methods
DisplayList.jsx - maps each snack item from the FilteredList to a ListItem Component for render
DisplayCart.jsx - maps each item in the cart from the FilteredList into an HTML list item element for render 
a list of items in the cart (cart) 
ListItem.jsx - renders the product information and Add To Cart button for one item

# Component Interaction

# User Interaction
The user triggers changes

App.jsx
This class contains your list of products as an array of objects of {key:value} pairs. Each key: value pair is a property of the item, such as name. 
You can fetch data from an API like we did in the JavaScript lab
Or you can manually input a list of products. 
Inside the return function in the App() function, you will create an instance of the FilteredList component that takes in your productList. Here, you are passing the productList to the FilteredList component as a prop.
In FilteredList, you will be referring to the productList as this.props.list!


FilteredList.js - contains filtering/sorting/aggregator methods
This component contains all of the web app’s major functionalities. This include filtering, sorting, and addTo/removeFrom aggregator. 
We will be keeping track of the selected size as a state. A state is a variable which is remembered when the component re-renders.
The state will later change dynamically depending on the filter selected!
We want the user to be able to select the size they want. Our example uses React Bootstrap’s Navbar component,
An item/option in the Nav will look like below. When the user selects this option, onSelectFilterSize() will be called and the eventKey will be passed to the function.
State changes will occur when a new filter type is selected. Therefore, we will set the size state according to the selected event. 
The eventKey from HTML buttons correlates to the event the size state is set to.  
We have to create a condition where only the items that match the filter type is returned. We do that by checking if the item’s size property matches the size state. 
Now, let’s use the built-in filter() function to filter our productList. We want this to be in a separate section that allows us to map each item to a certain HTML style for render. First, below our HTML buttons in the render() function: 
This displays the items beneath the buttons. We pass the productList we received as a prop to DisplayList as a prop again and filter that list with our predefined condition so it knows what items to display. Inside DisplayList, we will deal with rendering the details of each item!

DisplayList.js - maps each product from App.js to an HTML element or Component for render
We want to efficiently render each item as its own HTML element displaying the item’s name and size. The map() function maps the items in the list to anything you want, such an HTML element (a list item for example!)

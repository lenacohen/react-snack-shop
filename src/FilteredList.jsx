import React from 'react';
import DisplayList from './DisplayList.jsx';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import DisplayCart from './DisplayCart.jsx';

{/* Component that takes in a product list and 
contains filtering, sorting, and aggregator methods */}
export default class FilteredList extends React.Component {
    constructor(props) {
        super(props);
        {/* Default state: display all items, sort low-high, and have an empty cart */}
		this.state = {
            size: "All",
            taste: "All",
            priceStart: "Low",
            cart: [],
            id: 0
		};
    }

    onSelectFilterSize = event => {
        {/* Set the size state to the event key */}
        this.setState({
            size: event
        })
    };

    matchesFilterSize = item => {
        {/* Takes in an item and returns true if it matches the selected size filter */}
        if(this.state.size === "All") { 
            return true
        } else if (this.state.size === item.size) {
            return true
        } else {
            return false
        }
    }

    onSelectFilterTaste = event => {
        {/* Set the taste state to the event key */}
        this.setState({
            taste: event
        })
    };

    matchesFilterTaste = item => {
        {/* Takes in an item and returns true if it matches the selected taste filter */}
        if(this.state.taste === "All") { 
            return true
        } else if (this.state.taste === item.taste) {
            return true
        } else {
            return false
        }
    }

    onSelectSortPrice = event => {
        {/* Set the price sorting state to the event key */}
        this.setState({
            priceStart: event
        })
    };

    sortPrice = (first, second) => {
        {/* Helper function for the sort method to sort low-to-high when 
        the priceStart state is Low and to sort high-to-low when the 
        priceStart state is High */}
        if(this.state.priceStart === "Low"){
            return first.price - second.price;
        } else {
            return second.price - first.price;
        }
    }

    addToCart = item => {
        {/* Function that takes in an item, makes a copy of it with a unique 
        id, and adds the copy to the cart*/}
        const newItem = { ...item };
        newItem.id = this.state.id;
        const newCart = [...this.state.cart, newItem];
        this.setState(
            (prevState) => ({
                id: prevState.id + 1,
                cart: newCart
            }));
    }

    removeFromCart = item => {
        {/* Function that takes in an item, and uses its unique 
        id to remove it from the cart */}
        const newCart = this.state.cart.filter(cartItem => cartItem.id !== item.id);;
        this.setState({cart: newCart});
    }

    render() {
        {/* Render three navbars that allow the user to filter by two categories and sort by one
        Create a DisplayList component with the filtered and sorted product list passed in, as well as the addToCart function
        Create a DisplayCart component with the cart and removeFromCart function passed in */}
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>Size</Navbar.Brand>
                    <Nav>
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Small" onSelect={this.onSelectFilterSize}>Small</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Medium" onSelect={this.onSelectFilterSize}>Medium</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Large" onSelect={this.onSelectFilterSize}>Large</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>Taste</Navbar.Brand>
                    <Nav>
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterTaste}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Salty" onSelect={this.onSelectFilterTaste}>Salty</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Sweet" onSelect={this.onSelectFilterTaste}>Sweet</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Natural" onSelect={this.onSelectFilterTaste}>Natural</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>Sort by Price</Navbar.Brand>
                    <Nav>
                        <Nav.Item><Nav.Link eventKey="Low" onSelect={this.onSelectSortPrice}>Low to High (Default)</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="High" onSelect={this.onSelectSortPrice}>High to Low</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                <DisplayList cartFun={this.addToCart} list={this.props.list.filter(this.matchesFilterSize).filter(this.matchesFilterTaste).sort(this.sortPrice)}/>
                <hr></hr>
                <h3 style={{color: 'black'}}>Your Snazzy Snacks:</h3> 
                <DisplayCart removeFun={this.removeFromCart} cart={this.state.cart}/>
            </div>
        )

    }
}
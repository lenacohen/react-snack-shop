import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';

{/* DisplayCart takes in a function to remove an item from the cart (removeFun) 
a list of items in the cart (cart) */}
export default class DisplayCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        {/* Render the Shopping Cart section which displays the items in the cart, 
        aggregates the price of the items, and the total price is updated 
        when items are added & removed from the cart */}
        return (
            <div> 
                <Card style={{ width: '18rem' }} className="mx-auto my-3">
                <Card.Header>Shopping Cart</Card.Header>
                <ListGroup variant="flush">
                    {this.props.cart.map(item => 
                    <ListGroup.Item>{item.name} - ${item.price} <br></br>
                    <Button variant="primary" onClick={() => this.props.removeFun(item)}>Remove</Button>
                    </ListGroup.Item>)}
                </ListGroup>
                <Card.Footer>Total Price: ${this.props.cart.reduce(( accumulator, currentValue ) => accumulator + currentValue.price, 0)} </Card.Footer>
                </Card>
            </div>
        )
    }
}
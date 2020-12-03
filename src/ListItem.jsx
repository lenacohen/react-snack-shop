import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

{/* Component that takes in a item and an add to cart function and 
renders the product information and an add to cart button in a card. */}
export default class ListItem extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            size: "All"
		};
    }

    render() {
        {/* Displays a card with product information (image, name, taste, 
        size and price) and a button that adds the item to the cart. */}
        return (
            <div className="mx-1 my-1">
                <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={this.props.item.image} />
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Text>
                    Size: {this.props.item.size} 
                    <br></br>
                    Taste: {this.props.item.taste}
                    <br></br>
                    Price: ${this.props.item.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.cartFun(this.props.item)}>Add to Cart</Button>
                </Card.Body>
                </Card>
            </div>
        )

    }
}
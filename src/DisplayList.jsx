import React from 'react';
import ListItem from './ListItem.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

{/* A component that maps each product from App.js to a ListItem Component for render.
DisplayList takes in a function to add an item to the cart (cartFun) 
and a list of products (list) */}
export default class DisplayList extends React.Component {
    constructor(props) {
		super(props);
    }
        
    render() {
        {/* Maps the list of products to a grid of ListItems */}
        return (
            <div className="mx-auto my-3"> 
                <Container className="mx-auto my-3">
                    <Row className="mx-5">
                        {this.props.list.map(item => <ListItem item={item} cartFun={this.props.cartFun} />)}
                    </Row>
                </Container>
            </div>
        )
    }
}
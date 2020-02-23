import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Container, Table} from 'react-bootstrap';
import axios from 'axios';

import classes from '../FindListing/FindListing.module.css';

class FindOrder extends Component {

    state = {
        loadedOrders: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/orders/all')
            .then(res => {
                this.setState({
                    loadedOrders: {
                        ...res.data.data
                    }
                });
                console.log(this.state.loadedOrders);
            })
            .catch(err => console.log(err));
    }

    render() {
        const data = []

        for (let entry in this.state.loadedOrders) {
            data.push(
                <tr key={parseInt(entry)}>
                    <td>{parseInt(entry) + 1}</td>
                    <td>{this.state.loadedOrders[entry]['order_id']}</td>
                    <td>{this.state.loadedOrders[entry]['listing_id']}</td>
                    <td>{this.state.loadedOrders[entry]['shipment_id']}</td>
                    <td>{this.state.loadedOrders[entry]['status']}</td>
                    <td><Link to={`/listing/${this.state.loadedOrders[entry]['sku_id']}`}>Open</Link></td>
                    <td><Link to={`/edit-listing/${this.state.loadedOrders[entry]['sku_id']}`}>Edit</Link></td>
                </tr>
            )
        }

        return (
            <Container>
                <Table className={classes.Table} striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order ID</th>
                            <th>Listing ID</th>
                            <th>Shipment ID</th>
                            <th>Order status</th>
                            <th>View details</th>
                            <th>Edit order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default FindOrder;
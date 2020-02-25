import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Container, Table, Form} from 'react-bootstrap';
import axios from 'axios';

import classes from '../FindListing/FindListing.module.css';

import {slideInDown} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const SlideInDown = styled.div `animation: 0.8s ${keyframes `${slideInDown}`} 1`;

class FindOrder extends Component {

    state = {
        loadedOrders: [],
        newStatus: null
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

    async handleStatusChange(e, order_item_id) {
        await this.setState({newStatus: e.target.value});

        axios.post(`http://localhost:8000/orders/update-status/?order_item_id=${order_item_id}&status=${this.state.newStatus}`)
            .then(res => console.log(res))
            .catch(e => console.log(e));
        
        this.setState({newStatus: null});
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
                    <td><Link to={`/order/${this.state.loadedOrders[entry]['order_id']}`}>Open</Link></td>
                    <td>
                    <Form>
                        <Form.Group>
                            <Form.Control className={classes.Input} as="select" onChange={(e) => this.handleStatusChange(e, this.state.loadedOrders[entry]['order_item_id'])}>
                                <option>APPROVED</option>
                                <option>READY_TO_DISPATCH</option>
                                <option>SHIPPED</option>
                                <option>DELIVERED</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    </td>
                    <td>
                        Track
                    </td>
                </tr>
            )
        }

        return (
            <Container>
                <SlideInDown>
                <Table className={classes.Table} striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Order ID</th>
                            <th>Listing ID</th>
                            <th>Shipment ID</th>
                            <th>Order status</th>
                            <th>View details</th>
                            <th>Update status</th>
                            <th>Track order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </Table>
                </SlideInDown>
            </Container>
        )
    }
}

export default FindOrder;
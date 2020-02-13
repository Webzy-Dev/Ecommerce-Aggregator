import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Container, Table} from 'react-bootstrap';
import axios from 'axios';

class findListing extends Component {

    state = {
        loadedListings: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/listings/all')
            .then(res => {
                this.setState({
                    loadedListings: {
                        ...res.data.data
                    }
                });
                console.log(this.state.loadedListings);
            })
            .catch(err => console.log(err));
    }

    render() {
        const data = []

        for (let entry in this.state.loadedListings) {
            data.push(
                <tr key={parseInt(entry)}>
                    <td>{parseInt(entry) + 1}</td>
                    <td>{this.state.loadedListings[entry]['listing_id']}</td>
                    <td>{this.state.loadedListings[entry]['sku_id']}</td>
                    <td>{this.state.loadedListings[entry]['listing_status']}</td>
                    <td><Link to={`/listing/${this.state.loadedListings[entry]['sku_id']}`}>Open</Link></td>
                </tr>
            )
        }

        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Listing ID</th>
                            <th>SKU ID</th>
                            <th>Listing status</th>
                            <th>View details</th>
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

export default findListing;
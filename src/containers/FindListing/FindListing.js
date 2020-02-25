import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Container, Table} from 'react-bootstrap';
import axios from 'axios';

import classes from './FindListing.module.css';
import Spinner from '../../components/Spinner/Spinner';

import {slideInDown} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const SlideInDown = styled.div `animation: 0.8s ${keyframes `${slideInDown}`} 1`;

class findListing extends Component {

    state = {
        loadedListings: [],
        isLoading: true
    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/listings/all')
            .then(res => {
                this.setState({
                    loadedListings: {
                        ...res.data.data
                    },
                    isLoading: false
                });
                console.log(this.state.loadedListings);
            })
            .catch(err => console.log(err));
    }

    render() {
        
        const data = []

        const content = (
            <SlideInDown>
                <div className={classes.White}>
                    <Table className={classes.Table} striped bordered hover>
                        <thead>
                                <tr>
                                <th>#</th>
                                <th>Listing ID</th>
                                <th>SKU ID</th>
                                <th>Listing status</th>
                                <th>View details</th>
                                <th>Edit listing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </Table>0
                </div>
            </SlideInDown>
        )

        const spinner = this.state.isLoading ? <Spinner className={classes.Spinner}/> : content;

        for (let entry in this.state.loadedListings) {
            data.push(
                <tr key={parseInt(entry)}>
                    <td>{parseInt(entry) + 1}</td>
                    <td>{this.state.loadedListings[entry]['listing_id']}</td>
                    <td>{this.state.loadedListings[entry]['sku_id']}</td>
                    <td>{this.state.loadedListings[entry]['listing_status']}</td>
                    <td><Link to={`/listing/${this.state.loadedListings[entry]['sku_id']}`}>Open</Link></td>
                    <td><Link to={`/edit-listing/${this.state.loadedListings[entry]['sku_id']}`}>Edit</Link></td>
                </tr>
            )
        }

        return (
            <Container>
                {spinner}
            </Container>
        )
    }
}

export default findListing;
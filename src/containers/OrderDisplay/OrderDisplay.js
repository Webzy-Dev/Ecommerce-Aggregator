import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useParams} from 'react-router-dom';

import {Table, Container} from 'react-bootstrap';

import classes from '../FindListing/FindListing.module.css';

import {slideInDown} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const SlideInDown = styled.div `animation: 0.8s ${keyframes `${slideInDown}`} 1`;

const ListingDisplay = (props) => {
    const [data,
        setData] = useState([]);

    let {order_id} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:8000/orders?order_id=${order_id}`);
                setData(res.data.data[0]);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
        console.log(data);
    }, []);

    let tableData = []

    for (let field in data) {
        if(field !== 'image_path') {
            tableData.push(
                <tr key={field}>
                    <td>{field}</td>
                    <td>{data[field]}</td>
                </tr>
            )
        } else {
            const fname = data[field].substring(43);
            const path = `/pics/${fname}`;
            tableData.push(
                <tr key={field}>
                    <td>Image</td>
                    <td><img style={{height: "200px", width: "auto"}} src={path}/></td>
                </tr>
            )
        }
    }

    return (
        <Container>
            <SlideInDown>
            <Table className={classes.Table} bordered striped hover>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
            </SlideInDown>
        </Container>
    )
}

export default ListingDisplay;
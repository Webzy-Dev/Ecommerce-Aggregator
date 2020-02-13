import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {useParams} from 'react-router-dom';

import {Table, Container} from 'react-bootstrap';

const ListingDisplay = (props) => {
    const [data,
        setData] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:8000/listings/${id}`);
                setData(res.data.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
        console.log(data);
    }, []);

    let tableData = []

    for (let field in data) {
        tableData.push(
            <tr key={field}>
                <td>{field}</td>
                <td>{data[field]}</td>
            </tr>
        )
    }

    return (
        <Container>
            <Table bordered striped hover>
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
        </Container>
    )
}

export default ListingDisplay;
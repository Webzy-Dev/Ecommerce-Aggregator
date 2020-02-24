import React, {useState} from 'react';
import classes from './Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';

import Spinner from '../../components/Spinner/Spinner';

export default function Home() {
    const [formData, setFormData] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleFileChange = e => {
        console.log(e.target.files[0])
    }

    return (
        <Container>
            <form>
                <input type="file" name="file" onChange={handleFileChange}/>

            </form>
        </Container>
    );
}
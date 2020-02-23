import React from 'react';
import classes from './Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';

import Spinner from '../../components/Spinner/Spinner';

export default function home() {
    return (
        <Container>
            <Row>
                <Col>
                    Test
                </Col>
                <Col>
                    <img src="/images/test.png" className={classes.MainImage}></img>
                </Col>
            </Row>
        </Container>
    );
}
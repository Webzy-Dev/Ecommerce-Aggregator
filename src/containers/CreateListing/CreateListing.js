import React, {useState} from 'react';

import {Redirect} from 'react-router-dom';

import classes from './CreateListing.module.css';

import {updateObject} from '../../util/util';

import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';

const CreateListing = (props) => {

    const [formData, setFormData] = useState({
        'listing_status': 'ACTIVE',
        'fulfillment_profile': 'FLIPKART',
        'fulfillment_shipping_provider': 'EKART',
        'fulfillment_procurement_type': 'REGULAR',
        'location_status': 'YES'
    });

    const [shouldRedirect, changeRedirect] = useState(false);

    const [redirectPath, setRedirectPath] = useState('/create-listing');

    const handleSubmit = e => {
        e.preventDefault();
        
        async function postData() {
            const res = await axios.post('http://localhost:8000/listings', formData);

            if(res.data.message === 'Success') {
                changeRedirect(true);
            }
        }

        postData();
    }

    const handleInputChange = (e, field) => {
        const data = e.target.value;

        if(field === 'sku_id') {
            setRedirectPath(`/listing/${data}`);
        }

        setFormData(updateObject(formData, field, data));

    }

    const redirect = shouldRedirect ? (
        <Redirect to={redirectPath} />
    ) : null;

    return (
        
        <Container>
            {redirect}

            <Form className={classes.Form} onSubmit={handleSubmit}>

                <h1 style={{fontWeight: "bold"}}>Create a new listing</h1>
                <h5>Fill out the details below to get started!</h5>

                <Form.Group>
                    <Form.Label>SKU ID</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'sku_id')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'product_id')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>MRP</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'mrp')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Your selling price</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'selling_price')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>HSN</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'hsn')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tax code</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'tax_code')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Listing status</Form.Label>
                    <Form.Control className={classes.Input} as="select" onChange={(e) => handleInputChange(e, 'listing_status')}>
                        <option>ACTIVE</option>
                        <option>INACTIVE</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fulfillment profile</Form.Label>
                    <Form.Control className={classes.Input} as="select" onChange={(e) => handleInputChange(e, 'fulfillment_profile')}>
                        <option>FLIPKART</option>
                        <option>CUSTOM</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fulfillment shipping provider</Form.Label>
                    <Form.Control className={classes.Input} as="select" onChange={(e) => handleInputChange(e, 'fulfillment_shipping_provider')}>
                        <option>EKART</option>
                        <option>FEDEX</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fulfillment procurement type</Form.Label>
                    <Form.Control className={classes.Input} as="select" onChange={(e) => handleInputChange(e, 'fulfillment_procurement_type')}>
                        <option>REGULAR</option>
                        <option>EXPRESS</option>
                        <option>MADE_TO_ORDER</option>
                        <option>DOMESTIC</option>
                        <option>INTERNATIONAL</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Package name</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'package_name')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location ID</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'location_id')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location status</Form.Label>
                    <Form.Control className={classes.Input} as="select" onChange={(e) => handleInputChange(e, 'location_status')}>
                        <option>YES</option>
                        <option>NO</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location inventory</Form.Label>
                    <Form.Control className={classes.Input} type="text" onChange={(e) => handleInputChange(e, 'location_inventory')}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default CreateListing;
import React, {useState, useEffect} from 'react';

import {Redirect} from 'react-router-dom';

import {useParams} from 'react-router-dom';

import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';

import {updateObject} from '../../util/util';

const EditListing = props => {
    const {skuId} = useParams();

    const [formData,
        setFormData] = useState({});
    
    const [touched, setTouched] = useState({});

    const [shouldRedirect,
        changeRedirect] = useState(false);

    const [redirectPath,
        setRedirectPath] = useState(`/listing/${skuId}`);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:8000/listings/${skuId}`);
                setFormData({
                    ...res.data.data
                });
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
        console.log(formData);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        async function postData() {
            const res = await axios.post('http://localhost:8000/listings/update', {listing_id: formData['listing_id'], ...touched});

            if(res.data.message === 'Success') {
                changeRedirect(true);
            }

            console.log(res);
        }

        postData();
    }

    const handleInputChange = (e, field) => {
        const data = e.target.value;

        if(field === 'sku_id') {     setRedirectPath(`/listing/${data}`); }

        setTouched(updateObject(touched, field, data));
        setFormData(updateObject(formData, field, data));

    }

    let redirect = shouldRedirect
        ? (<Redirect to={redirectPath}/>)
        : null;

    return (
        <Container>
            {redirect}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>SKU ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['sku_id']}
                        onChange={(e) => handleInputChange(e, 'sku_id')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['product_id']}
                        onChange={(e) => handleInputChange(e, 'product_id')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>MRP</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['mrp']}
                        onChange={(e) => handleInputChange(e, 'mrp')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Your selling price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['selling_price']}
                        onChange={(e) => handleInputChange(e, 'selling_price')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>HSN</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['hsn']}
                        onChange={(e) => handleInputChange(e, 'hsn')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tax code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['tax_code']}
                        onChange={(e) => handleInputChange(e, 'tax_code')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Listing status</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => handleInputChange(e, 'listing_status')}>
                        <option>ACTIVE</option>
                        <option>INACTIVE</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fulfillment profile</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => handleInputChange(e, 'fulfillment_profile')}>
                        <option>FLIPKART</option>
                        <option>CUSTOM</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fulfillment shipping provider</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => handleInputChange(e, 'fulfillment_shipping_provider')}>
                        <option>EKART</option>
                        <option>FEDEX</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Fulfillment procurement type</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => handleInputChange(e, 'fulfillment_procurement_type')}>
                        <option>REGULAR</option>
                        <option>EXPRESS</option>
                        <option>MADE_TO_ORDER</option>
                        <option>DOMESTIC</option>
                        <option>INTERNATIONAL</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Package name</Form.Label>
                    <Form.Control
                        placeholder={formData['package_name']}
                        type="text"
                        onChange={(e) => handleInputChange(e, 'package_name')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['location_id']}
                        onChange={(e) => handleInputChange(e, 'location_id')}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location status</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => handleInputChange(e, 'location_status')}>
                        <option>YES</option>
                        <option>NO</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Location inventory</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={formData['location_inventory']}
                        onChange={(e) => handleInputChange(e, 'location_inventory')}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default EditListing;
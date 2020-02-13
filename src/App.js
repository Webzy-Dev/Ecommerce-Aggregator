import React from 'react';
import './App.css';

import history from './history';

import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import FindListing from './containers/FindListing/FindListing';
import ListingDisplay from './containers/ListingDisplay/ListingDisplay';
import CreateListing from './containers/CreateListing/CreateListing';
import EditListing from './containers/EditListing/EditListing';

function App() {
    return (
        <Router history={history}>
            <div className="App">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">eCommerce aggregator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/find-listing">Find Listing</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Listings" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/create-listing">Create a new listing</NavDropdown.Item>
                                <NavDropdown.Item href="/find-listing">View all listings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route path="/find-listing">
                        <FindListing/>
                    </Route>
                    <Route path="/create-listing">
                        <CreateListing/>
                    </Route>
                    <Route path="/edit-listing/:skuId">
                        <EditListing />
                    </Route>
                    <Route path="/listing/:id">
                        <ListingDisplay/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

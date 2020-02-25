import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './home-page.css';

import Spinner from '../../components/Spinner/Spinner';

export default function Home() {
    return (
        <div>
            <section class="hv">
            <div class="sign">
                <lable class="right">
                    <img src="images/user.png" />>
                    <button href="landing-page.html">Sign Out</button>
                </lable>
            </div>
            <div class="menu">
                <ul class="flex just">
                    <li><a href="account.html">Account</a></li>
                    <li><a href="inventory.html">Inventory</a></li>
                    <li><a href="listing.html">Listing</a></li>
                    <li><a href="orders.html">Orders</a></li>
                    <li><a href="shipment.html">Shipment</a></li>
                </ul>
            </div>
            <div class="switch">
                <img src="/HTML/images/Amazon.png"/>
                <img src="/HTML/images/flipkart.png"/>>
            </div>
            {/* <!-- <div class="container mar"> -->
                <!-- <div class="row mar">
                    <div class="col">
                        <div class="container bb">
                            <a href="addProduct.html"><img src="/HTML/images/add.png" style="width: 30px; height: 30px; opacity: 50%;" alt=".."> Add Product</a>
                        </div>
                    </div>
                    <div class="col tt">
                        <div class="container bb">
                            <table class="ds">
                                <tr>
                                  <th>Product Id</th>
                                  <th> Name </th>
                                  <th> Unit Sell </th>
                                </tr>
                                <tr>
                                  <td>001</td>
                                  <td>Theory of Everything</td>
                                  <td>150</td>
                                </tr>
                                <tr>
                                  <td>002</td> 
                                  <td>Big Bang Theory 1</td>
                                  <td>200</td>
                                </tr>
                                <tr>
                                    <td>003</td> 
                                    <td>Big Bang Theory 2</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>004</td> 
                                    <td>Big Bang Theory 3</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>005_</td> 
                                    <td>Big Bang Theory 4</td>
                                    <td>200</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div> --> */}
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="container bb">
                        <a href="addProduct.html"><img src="/HTML/images/add.png" style={{width: '30px', height: '30px', opacity: '50%'}} alt=".." />> Add Product</a>
                    </div>
                    <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Unit Selled</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">001</th>
                            <td>Theory of Everything</td>
                            <td>21/2/2019</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <th scope="row">002</th>
                            <td>Big Bang Theory 1</td>
                            <td>21/2/2019</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <th scope="row">003</th>
                            <td>Big Bang Theory 2</td>
                            <td>21/6/2019</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <th scope="row">004</th>
                            <td>Big Bang Theory 3</td>
                            <td>21/1/2019</td>
                            <td>150</td>
                          </tr>
                          <tr>
                            <th scope="row">005</th>
                            <td>Big Bang Theory 4</td>
                            <td>21/5/2019</td>
                            <td>150</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </section>
        <section>
            <h1 class="align">Product Analysis</h1>
            <canvas id="myChart"></canvas>
        </section>
        
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"></script>
        <script src="/js/home-page.js"></script>
    </div>
    );
}
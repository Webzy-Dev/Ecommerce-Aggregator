import React from 'react';

import './Track-order-3.css';

const TrackOrder = () => {
    return (
        <div>
        <div className="line"></div>
            <div className="grass-5">
            <img className="grass5" src="./images/grass (1).png" alt="" />
            </div>
            <div className="grass-3">
            <img className="grass3" src="./images/grass (1).png" alt="" />
            </div>
            <div className="grass-4">
            <img className="grass4" src="./images/grass (1).png" alt="" />
            </div>
            <div className="traffic-light">
            <img className="traffic" src="./images/traffic-light.png" alt="" />
            </div>
            <div className="grass-7">
            <img className="grass7" src="./images/grass (1).png" alt="" />
            </div>
            <div className="board-sign">
            <img className="panel" src="./images/panel.png" alt="" />
            </div>
            <div className="truck">
            <img className="delivery-truck" src="./images/delivery.svg" alt="" />
            </div>
            <div className="small-cloud">
            <img className="cloud3" src="./images/cloud (1).png" alt="" />
            </div>
            <div className="cloud-big">
            <img className="cloud1" src="./images/cloud (1).png" alt="" />
            </div>
            <div className="med-cloud">
            <img className="cloud2" src="./images/cloud (1).png" alt="" />
            </div>
            <div className="grass-1">
            <img className="grass1" src="./images/grass (1).png" alt="" />
            </div>
            <div className="grass-2">
            <img className="grass2" src="./images/grass (1).png" alt="" />
            </div>
            <div className="grass-6">
            <img className="grass6" src="./images/grass (1).png" alt="" />
            </div>


            <section className="status">
            <div className="order-status">
                <ul>
                <li>Approved</li>
                <li>Dispatched</li>
                <li>Out for Delivery</li>
                <li>Delivered</li>
                </ul>
            </div>
            </section>
        </div>
    );
}

export default TrackOrder;
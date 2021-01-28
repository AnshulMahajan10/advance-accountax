import React from 'react';
import './Services.css';
import Card from 'react-bootstrap/Card';

export default function Services() {
    return (
        <div className="service-container">

            <h2>Services</h2>
            <h3>Check our <span>Services</span></h3>

            <ul>
                <li>Accounting</li>
                <li>Payroll tax</li>
                <li>Tax planning</li>
                <li>Life insurance</li>
                <li>Retirement planning</li>
                <li>Tax efficient investment</li>
            </ul>


            {/* <Card>
                <Card.Body>
                    <Card.Title className="cardTitle">   <h3>We provide following <span>Services</span></h3></Card.Title>
                    <ul>
                        <li>Accounting</li>
                        <li>Payroll tax</li>
                        <li>Tax planning</li>
                        <li>Life insurance</li>
                        <li>Retirement planning</li>
                        <li>Tax efficient investment</li>
                    </ul>
                </Card.Body>
            </Card> */}

        </div>



    );

}
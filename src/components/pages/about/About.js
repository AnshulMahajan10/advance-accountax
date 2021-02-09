import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className="about-container">

            <h2>About</h2>

            <br></br>

            <Card>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">   Advance Accountax Services</Card.Title>
                    <h3 >
                        We have been providing our services  for more than 20 years, we have wide range of clients across GTA.
          </h3>
                    <h3>
                        Our main focus is  maintaining the trust of our clients and providing services with efficency.
          </h3>
                    <h3>

                        Director: Sunil Jaggi,
                        Tax Principal
          </h3>
                </Card.Body>



            </Card>



        </div>

    );

}
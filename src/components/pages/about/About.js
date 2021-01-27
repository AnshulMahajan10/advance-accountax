import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className="about-container">
         

            <Card>
                <Card.Body>
                    <Card.Title className="cardTitle">   Advance Accountax Services</Card.Title>
                    <div >
                        We have been providing our services  for more than 20 years, we have wide range of clients across GTA.
          </div>
                    <div >
                        Our main focus is the always maintaining the trust of our clients and proving services with efficency.
          </div>
                    <div>

                        Director: Sunil Jaggi, CPA
                        Tax Principal
          </div>
                </Card.Body>



            </Card>



        </div>

    );

}
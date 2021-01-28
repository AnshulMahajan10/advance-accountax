import React from 'react';
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdPlace, MdEmail, MdPhone } from 'react-icons/md';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <div className="contact-container">

            <h2>Contact</h2>

            <div className="row">

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            {/* <div class="col"> */}
                                <div >
                                    <MdPlace className='navbar-icon' />
                                </div>
                              
                                <div >
                                    Our Address
                        </div>
                            {/* </div> */}
                        </Card.Title>

                        <a href="https://www.google.com/maps/place/120+Traders+Blvd+E,+Mississauga,+ON+L4Z+3K7/data=!4m2!3m1!1s0x882b40a1b8a534ad:0x796d25af73db9e00?sa=X&ved=2ahUKEwjzmpziorjuAhWDg-AKHbIHD_MQ8gEwAHoECAgQAQ"
                            target="_blank">
                            <div >
                                120 Traders Blvd E
                        </div>
                            <div >
                                Mississauga, ON L4Z 3K7
                        </div>
                        </a>


                        <div>

                        </div>

                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            <div>
                                <MdEmail className='navbar-icon' />
                            </div>
                            <div>
                                Email Us
                            </div>

                        </Card.Title>

                        <div >
                            <a href="mailto:sunil_tax@yahoo.com" target="_top">
                                sunil_tax@yahoo.com
                            </a>

                        </div>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            <div>
                                <MdPhone className='navbar-icon' />
                            </div>
                            <div>
                                Call Us
                            </div>

                        </Card.Title>
                        <div >
                            416-824-4822
                        </div>
                    </Card.Body>
                </Card>



            </div>




        </div>

    );

}
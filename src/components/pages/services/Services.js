import React from 'react';
import './Services.css';
import Card from 'react-bootstrap/Card';

export default function Services() {
    return (
        <div className="service-container">

            <h2>Services</h2>
            <h3>Check our <span>Services</span></h3>
            {/* <br></br>
            <ul>
                <li>Accounting</li>
                <li>Payroll tax</li>
                <li>Tax planning</li>
                <li>Life insurance</li>
                <li>Retirement planning</li>
                <li>Tax efficient investment</li>
            </ul> */}


            <div className="row">

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            {/* <div class="col"> */}
                            <div className='navbar-icon'>

                            </div>
                            <br></br>
                            <div >
                                Accounting
                        </div>
                            {/* </div> */}
                        </Card.Title>

                        {/* <a href="https://www.google.com/maps/place/120+Traders+Blvd+E,+Mississauga,+ON+L4Z+3K7/data=!4m2!3m1!1s0x882b40a1b8a534ad:0x796d25af73db9e00?sa=X&ved=2ahUKEwjzmpziorjuAhWDg-AKHbIHD_MQ8gEwAHoECAgQAQ"
                            target="_blank">
                            <div >
                                120 Traders Blvd E
                        </div>
                            <div >
                                Mississauga, ON L4Z 3K7
                        </div>
                        </a> */}


                        <div>

                        </div>

                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            <div className='navbar-icon' >

                            </div>
                            <br></br>
                            <div>
                                Payroll Tax
                            </div>

                        </Card.Title>

                        {/* <div >
                            <a href="mailto:sunil_tax@yahoo.com" target="_top">
                                sunil_tax@yahoo.com
                            </a>

                        </div> */}
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            <div className='navbar-icon'>

                            </div>
                            <br></br>
                            <div>
                                Tax Planning
                            </div>

                        </Card.Title>
                        {/* <div >
                            416-824-4822
                        </div> */}
                    </Card.Body>
                </Card>



            </div>

            <div className="row">

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            {/* <div class="col"> */}
                            <div className='navbar-icon'>

                            </div>
                            <br></br>
                            <div >
                                Life Insurance
        </div>
                            {/* </div> */}
                        </Card.Title>

                        {/* <a href="https://www.google.com/maps/place/120+Traders+Blvd+E,+Mississauga,+ON+L4Z+3K7/data=!4m2!3m1!1s0x882b40a1b8a534ad:0x796d25af73db9e00?sa=X&ved=2ahUKEwjzmpziorjuAhWDg-AKHbIHD_MQ8gEwAHoECAgQAQ"
            target="_blank">
            <div >
                120 Traders Blvd E
        </div>
            <div >
                Mississauga, ON L4Z 3K7
        </div>
        </a> */}


                        <div>

                        </div>

                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            <div className='navbar-icon' >

                            </div>
                            <br></br>
                            <div>
                                Retirement Planning
            </div>

                        </Card.Title>

                        {/* <div >
            <a href="mailto:sunil_tax@yahoo.com" target="_top">
                sunil_tax@yahoo.com
            </a>

        </div> */}
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                            <div className='navbar-icon'>

                            </div>
                            <br></br>
                            <div>
                                Tax Efficient Investment
            </div>

                        </Card.Title>
                        {/* <div >
            416-824-4822
        </div> */}
                    </Card.Body>
                </Card>



            </div>




        </div>



    );

}
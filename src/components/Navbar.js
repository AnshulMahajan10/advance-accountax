import React, { useState, useEffect, Component } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Button } from './Button';
import { MdFingerprint } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { MdArrowUpward } from 'react-icons/md';
import { FaArrowCircleUp } from "react-icons/fa";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [opacity, setOpacity] = useState(1);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => (
        scroll.scrollToTop()
    );

    const showUpIcon = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
            setOpacity(1);
        } else {
            setOpacity(0);
        }

    };

    window.addEventListener('scroll', showUpIcon);

    return (

        <div>
            {/* <IconContext.Provider value={{ color: '#fff' }}> */}

            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                       
                            Advance Accountax
                        </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-links" to="services" spy={true} smooth={true} duration={500} onClick={closeMobileMenu}
                            // to='/services' className="nav-links" onClick={closeMobileMenu}
                            >
                                Services
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-links" to="about" spy={true} smooth={true} duration={500} onClick={closeMobileMenu}
                            // to='/about' className="nav-links" onClick={closeMobileMenu}
                            >
                                About
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-links" to="contact" spy={true} smooth={true} duration={500} onClick={closeMobileMenu}
                            >
                                Contact
                             </Link>
                        </li>
                        {/* <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link" >
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                        ) : (
                                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>SIGN UP</Button>
                                </Link>
                            )}
                    </li> */}
                    </ul>
                </div>
            </div>

            {/* </IconContext.Provider> */}

            <Home></Home>
            <Element id="services">
                <Services ></Services>
            </Element>
            <Element id="about">
                <About ></About>
            </Element>
            <Element id="contact">
                <Contact ></Contact>
            </Element>

            <a onClick={scrollToTop} className="back-to-top" style={{ opacity: `${opacity}` }}><FaArrowCircleUp className='navbar-icon' /></a>
        </div>
    );
}

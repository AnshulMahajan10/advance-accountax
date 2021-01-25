import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { MdFingerprint } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (


        <IconContext.Provider value={{ color: '#fff' }}>

            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <MdFingerprint className='navbar-icon' /> */}
                            Advance Accountax
                        </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" >
                                Home
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links">
                                Services
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" >
                                About
                             </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" >
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
        </IconContext.Provider>


    );
}

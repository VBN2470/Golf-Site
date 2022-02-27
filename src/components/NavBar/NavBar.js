
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../pictures/logo.png';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <nav className='navbar bg-dark'>
            <div>
                <h3 style={headerStyle}>
                    <img
                        src={logo}
                        width="12%"
                        height="12%"
                    />
                    North's Golf Club
                </h3>
            </div>
            <ul>
                <li><Link className='navbar-link' to='/'>Home</Link></li>
                <li onMouseEnter={() => setIsActive(true)} 
                    onMouseLeave={() => setIsActive(false)}>
                    <Link className='navbar-link' to='/events' onMouseEnter={() => setIsActive(true)}>Events</Link>
                        {
                            isActive && (
                                <div className='menu-container' onMouseLeave={() => setIsActive(false)}>
                                    <ul className='menu'>
                                        <li className='menu-item' onClick={handleClick}><Link className='menu-link' to='/history'>History</Link></li>
                                    </ul>
                                </div>
                            )
                        }
                </li>
                <li><Link className='navbar-link' to='/gallery'>Gallery</Link></li>
                <li><Link className='navbar-link' to='/membership'>Membership</Link></li>
                <li><Link className='navbar-link' to='/contact'>Contact</Link></li>
                <li><Link className='navbar-link' to='/about'>About Us</Link></li>
            </ul >
        </nav>
    );
};

const headerStyle = {
    margin: 'auto',
    color: 'white',
    paddingTop: '0.4rem',
    paddingLeft: '0.4rem',
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './images/Logo.svg';


const Header = () => {
  return (
    <header className="header">
        <div className="boxer">
        <div className="left-content">
            <a href=""><img src={logo} alt="Logo" className="logo" /></a>
            <span className="brand-text">MEDITA</span>
        </div>
        
        <div className='navbar'>
            <ul className="nav">
            <Link to="/forum">Forum</Link>
            <li><a>Portal</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Sign up</a></li>
            </ul>
        </div></div>
    </header>
  )
}

export default Header
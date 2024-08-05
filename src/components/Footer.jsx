import React from 'react';
import './footer.css';
import logo from './images/Logo.svg';
import twitter from './images/twitter.svg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import flipboard from './images/flipboard.svg';


const Footer = () => {
    return (
    <div>
        <div className='footer-greybox'>
            <div className='top-left-content'>
                <img src={logo} alt="logo" className='logo'/>
                <span className="brand-text">MEDITA</span>
            </div>
            <hr />
            <div className='middle-content'>
                <div className='middle-left'>
                    <h3>Discover Serenity Within:<br />Nourish Your Mind, Body, and Soul <br /> with Medita, Your Guide to Mental Wellness</h3>
                </div>
                <div className='middle-mid'>
                <ul className='footer-nav-left'>
                    <li><a>Forum</a></li>
                    <li><a>Chatbot</a></li>
                    <li><a>Portal</a></li>
                </ul>
                </div>
                <div className='middle-mid'>
                <ul className='footer-nav-right'>
                    <li><a>About Us</a></li>
                    <li><a>Sign in</a></li>
                </ul>
                </div>
            </div>
            <hr />
            <div className='bottom-content'>
                < div className='bottom-left'>
                    <h3>Follow Us</h3><br/><br/>
                    <div className='bottom-nav-left'><br />
                    <img src={instagram} alt="instagram" className='insta' />
                    <img src={facebook} alt="facebook" className='facebook'   />
                    <img src={twitter} alt="twitter" className='twitter'  />
                    <img src={flipboard} alt="flipboard"  className='flipboard'  />
                </div>
                </div>
                <div className='bottom-right'>
                    <span>Contact us</span>
                    <ul className='bottom-nav-right'>
                        <li>+911231231234</li>
                        <li>abcxyz@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer;

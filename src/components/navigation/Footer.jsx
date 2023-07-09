import React from 'react';
import './Footer.css';

const Footer = () =>{

    return(<footer className="main-footer">
    <nav>
        <ul class="main-footer__links">
            <li className="main-footer__link">
                <a href="#">Support</a>
            </li>
            <li className="main-footer__link">
                <a href="#">Facebook</a>
            </li>
            <li className="main-footer__link">
                <a href="#">Instagram</a>
            </li>
            <li className="main-footer__link">
                <a href="#">Twitter</a>
            </li>
            <li className="main-footer__link">
                <a href="#">Terms of Use</a>
            </li>
            <li className="main-footer__link">
                <a href="#">Contact us</a>
            </li>
        </ul>
    </nav>
</footer>);
}

export default Footer;
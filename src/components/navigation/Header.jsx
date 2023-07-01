import React from 'react';
import './Header.css';
import logo from '../../images/logo192.png';

const Header = () =>{
    return(<div className='main__header'>
        <ul className='nav__items'>
        <li className='nav__item'>
        <img className='nav__item__logo' src={logo} alt="alt" />
        </li>
            <li className='nav__item'>HOME</li>
            <li className='nav__item'>WHO WE ARE</li>
            <li className='nav__item'>WHAT WE DO</li>
            <li className='nav__item'>SUPPORT US</li>
            <li className='nav__item'>GALLERY</li>
            <li className='nav__item'>CONTACT US</li>
            <li className='nav__item_button'>DONATE</li>



        </ul>
    </div>);
}

export default Header;
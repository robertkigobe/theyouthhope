import React from "react";
import "./Header.css";
import logo from "../../images/logo192.png";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div>
          <button className="toggle-button">
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
          </button>
          <a href="#" className="main-header__brand">
            <img src={logo} alt="alt" />
          </a>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <a href="#">WHO WE ARE</a>
            </li>
            <li className="main-nav__item">
              <a href="#">WHAT WE DO</a>
            </li>
            <li className="main-nav__item">
              <a href="#">GALLERY</a>
            </li>
            <li className="main-nav__item">
              <a href="#">SUPPORT US</a>
            </li>
          </ul>
        </nav>
      </header>
      <nav className="mobile-nav">
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <a href="packages/index.html">Packages</a>
          </li>
          <li className="mobile-nav__item">
            <a href="customers/index.html">Customers</a>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <a href="start-hosting/index.html">Start Hosting</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

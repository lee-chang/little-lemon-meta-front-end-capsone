import { useState } from 'react';
import logo from '../assets/Logo.svg';
import './navBar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="navbar-wrap">
          <div className="navbar-brand">
            <img src={logo} alt="logo" className="navbar-logo" />
            <h1 className="navbar-title" hidden>
              LITTLE LEMON
            </h1>
          </div>
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <button className="menu-toggle" onClick={handleMenuToggle}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#reservation">Reservation</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
              <li>
                <a href="#order-online" className="btn-lg-secondary">
                  Order Online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

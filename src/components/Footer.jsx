import { Link } from "react-router-dom";
import logoFooter from "../assets/footer-logo.png";
import iconfacebook from "../assets/social-facebook.svg";
import iconinstagram from "../assets/social-insta.svg";
import icontiktok from "../assets/social-tiktok.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-items">
          <img src={logoFooter} alt="Little Lemon" className="footer-logo" />
        </div>
        <div className="footer-items footer-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#about">About Us</Link>
            </li>
            <li>
              <Link to="#menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="#login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer-items footer-contact">
          <p>Contact: ( +91 ) XXXXX84223</p>
          <p>Email: contact@littlelemon.com</p>
        </div>
        <div className="footer-items footer-social">
          <a href="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">
            <img src={iconfacebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">
            <img src={iconinstagram} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/watch?v=3Li-FfypZYE" target="_blank" rel="noreferrer">
            <img src={icontiktok} alt="TikTok" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

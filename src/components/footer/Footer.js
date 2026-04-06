import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
   const navigate = useNavigate();

   const handleCollectionClick = (category) => {
      // Scroll to top and navigate to home
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
      // Trigger category filter after navigation
      setTimeout(() => {
         const event = new CustomEvent('selectCategory', { detail: { category } });
         window.dispatchEvent(event);
      }, 100);
   };

   return (
      <footer id="contacts" className="footer fade-in">
         <div className="footer-top">
            <div className="footer-brand">
               <span className="logo">House Staff</span>
               <p>Bringing modern design and comfort to your home through our curated collection of premium furniture.</p>
               <div className="social-links">
                  <button aria-label="Facebook"><FaFacebookF /></button>
                  <button aria-label="Twitter"><FaTwitter /></button>
                  <button aria-label="Instagram"><FaInstagram /></button>
                  <button aria-label="LinkedIn"><FaLinkedinIn /></button>
               </div>
            </div>

            <div className="footer-links-grid">
               <div className="footer-column">
                  <h4>Information</h4>
                  <ul className="footer-list">
                     <li><a href="#about">About Us</a></li>
                     <li><a href="#contact">Contact Us</a></li>
                     <li><Link to="/terms">Terms of Use</Link></li>
                     <li><Link to="/privacy">Privacy Policy</Link></li>
                  </ul>
               </div>

               <div className="footer-column">
                  <h4>Collections</h4>
                  <ul className="footer-list">
                     <li><button onClick={() => handleCollectionClick('chairs')}>Modern Chairs</button></li>
                     <li><button onClick={() => handleCollectionClick('sofa')}>Living Room</button></li>
                     <li><button onClick={() => handleCollectionClick('tables')}>Design Tables</button></li>
                     <li><button onClick={() => handleCollectionClick('light')}>Light Studio</button></li>
                  </ul>
               </div>

               <div className="footer-column">
                  <h4>Customer Care</h4>
                  <ul className="footer-list">
                     <li><button>Shopping Info</button></li>
                     <li><button>Order Tracking</button></li>
                     <li><button>Returns & Exchanges</button></li>
                     <li><button>FAQ</button></li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} House Staff. All rights reserved.</p>
            <p>Designed with passion for modern spaces.</p>
         </div>
      </footer>
   );
};

export default Footer;

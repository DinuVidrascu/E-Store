import React from "react";

import "./Footer.css";

const Footer = () => {
   return (
      <footer className="footer">
         <ul className="footer-list">
            <li>
               <a href="#">About Us</a>
            </li>
            <li>
               <a href="#">Contact Us</a>
            </li>
            <li>
               <a href="#">Privacy Policy</a>
            </li>
            <li>
               <a href="#">Terms of Use</a>
            </li>
         </ul>
         <div className="social-links">
            <a href="#">
               <i className="uil uil-facebook"></i>
            </a>
            <a href="#">
               <i class="uil uil-twitter"></i>
            </a>
            <a href="#">
               <i className="uil uil-instagram-alt"></i>
            </a>
            <a href="#">
               <i className="uil uil-linkedin"></i>
            </a>
         </div>
         <p className="copyright">
            Copyright &copy;. All rights reserved.
         </p>
      </footer>
   );
};

export default Footer;

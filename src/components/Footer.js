import React from 'react';
import logo from '../images/marbelologo.png'

function Footer() {
  return (
   <footer className="footer">
    <div className="footer-container">
     <div className="footer-logo">
      <img
       src={logo}
       alt="Company Logo"
       style={{ width: '200px', height: '80px' }}
      />

     </div>
     <div className="footer-links">
      <ul>
       <li>
        <a href="#">Home</a>
       </li>
       <li>
        <a href="#">About Us</a>
       </li>
       <li>
        <a href="#">Services</a>
       </li>
       <li>
        <a href="#">Blog</a>
       </li>
       <li>
        <a href="#">Contact Us</a>
       </li>
      </ul>
     </div>
     <div className="footer-social">
      <ul>
       <li>
        <a href="#">
         <i className="fab fa-facebook-f"></i>
        </a>
       </li>
       <li>
        <a href="#">
         <i className="fab fa-twitter"></i>
        </a>
       </li>
       <li>
        <a href="#">
         <i className="fab fa-instagram"></i>
        </a>
       </li>
       <li>
        <a href="#">
         <i className="fab fa-linkedin-in"></i>
        </a>
       </li>
      </ul>
     </div>
    </div>
    <div className="footer-bottom">
     <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
   </footer>
  )
}

export default Footer;

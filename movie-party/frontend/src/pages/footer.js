
import './footer.css'
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState} from 'react';

const Footer = () => {
    const [cart, setcart] = useState("0");



    return(
        
        <footer class="footer">

        <div class="footer-top">
          <div class="container">
    
            <div class="footer-brand-wrapper">
    
              <a href="./index.html" class="logo">
                <img className='logo-img' src={require('../images/logo.png')} alt="Filmlane logo"/>
              </a>
    
              <ul class="footer-list">
    
                <li>
                  <a href="./index.html" class="footer-link">Home</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Movie</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">TV Show</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Web Series</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Pricing</a>
                </li>
    
              </ul>
    
            </div>
    
            <div class="divider"></div>
    
            <div class="quicklink-wrapper">
    
              <ul class="quicklink-list">
    
                <li>
                  <a href="#" class="quicklink-link">Faq</a>
                </li>
    
                <li>
                  <a href="#" class="quicklink-link">Help center</a>
                </li>
    
                <li>
                  <a href="#" class="quicklink-link">Terms of use</a>
                </li>
    
                <li>
                  <a href="#" class="quicklink-link">Privacy</a>
                </li>
    
              </ul>
    
              <ul class="social-list">
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
    
              </ul>
    
            </div>
    
          </div>
        </div>
    
        <div class="footer-bottom">
          <div class="container">
    
            <p class="copyright">
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>
    
            <img src={require("../images/footer-bottom-img.png")} alt="Online banking companies logo" class="footer-bottom-img"/>
    
          </div>
        </div>
    
      </footer>
 
    
) 
}
export default Footer;
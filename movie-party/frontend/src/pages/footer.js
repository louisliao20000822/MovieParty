
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
    
    
              <ul class="footer-list">
              <a href="/" class="logo">
                <img className='footer-logo-img' src={require('../images/logo.png')} alt="Filmlane logo"/>
              </a>
                <li>
                  <a href="/" class="footer-link">Home</a>
                </li>
    
                <li>
                  <a href="/comedy" class="footer-link">Comedy</a>
                </li>
    
                <li>
                  <a href="/marvel" class="footer-link">Marvel</a>
                </li>
    
                <li>
                  <a href="/anime" class="footer-link">Anime</a>
                </li>
    
    
              </ul>
    
            </div>
    
            <div class="divider"></div>
    
            <div class="quicklink-wrapper">
    
    
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
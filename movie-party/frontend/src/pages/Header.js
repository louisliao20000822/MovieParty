

import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState} from 'react';

const Header = () => {
    const [cart, setcart] = useState("0");



    return(
        
        <header className = "sticky-top">
        <link rel="stylesheet" href="./style.css"></link>
        <nav className="navbar   mb-0 " >
            <div className="container-fluid px-0 px-xl-2">
            
                <Link to ="/" className="navbar-brand" href="/"><img className="ml-4  d-none d-xl-block col-0" src = {require('../images/logo.png')} alt = "logo" id ="logo"/></Link>
                <Link to ="/"className="navbar-brand" href="/"><img className="d-block d-xl-none mx-auto " src = {require('../images/logo.png')} alt = "logo" id ="logo"/></Link> 
                <div className="d-flex col-0 d-xl-none justify-content-end">
                    <a href=""><img src={require('../images/search.png')} alt="Search Button" className="d-xl-none"/></a>
                </div>


            
            
            
                <ul className=" navbar-nav me-auto col-xl-4 col-12 justify-content-center justify-content-xl-start hstack">
                    <li className="nav-item ">
                        <Link to="/"   className="nav-item nav-link active" id ="man-tag" >首頁</Link>
                    </li>
                    <li className="vr align-self-center " id = "black-vr"></li>
                    <li className="nav-item">
                        <Link to="/"  className="nav-item nav-link " id="woman-tag" >電影</Link>
                    </li>

                </ul>

            
                <div className="d-none d-xl-flex  justify-content-end me-4">
                <div class="search-container me-5 mt-2">
                    <input type="text" name="search" placeholder="Search..." class="search-input"/>
                    <a href="#" class="search-btn">
                            <i class="fas fa-search"></i>      
                    </a>
                </div>
                    <div>
                        <a href="Member" className="nav-item me-3">
                            {!localStorage.getItem('Name')&&
                            <button class="btn btn-primary mt-1">Sign in</button>
                            }
                            {localStorage.getItem('Name')&&
                            <button class="btn btn-primary mt-1" onClick={()=>{localStorage.removeItem('Name')}}>Log out</button>}
                        </a>
                    </div>
                </div>
            </div> 
        </nav>
    </header>
    
) 
}
export default Header;
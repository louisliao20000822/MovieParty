

import { useEffect, useState} from 'react';
import {useRef} from 'react';
import { BrowserRouter, Routes, Route ,useLocation} from "react-router-dom";
import Party from './Party'
import Movie from './Movie'
import Header from './Header';
import Body from './Body'
import Member from './Member';
import Footer from './footer'
// import Test from './test'
import {useParams} from "react-router-dom";

function HOME() {

  

  return (
    
    <>
    <div>
    <Header/>
    <Routes>
        <Route path= "/" element={<><Body/></>}/>
        {/* <Route path= "Test" element={<><Test/></>}/> */}
        <Route path= "Member" element={<><Member/></>}/>
        <Route path= {"Movie/:mId"} element={<><Movie/></>}/>  
        <Route path= {"Party/:mId"} element={<><Party/></>}/>
        {/* <Route path = {"Select/" element={<><Box /></>}} */}
      
    </Routes>
    <Footer/>
    </div>
    </> 

  );
}

export default HOME;

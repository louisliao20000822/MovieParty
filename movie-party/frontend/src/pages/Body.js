
import './style.css'
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState} from 'react';
import api from '../api/api'
import './movie.css'
import InsertMovie from '../components/InsertMovie'
import {useParams,useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Body = (props) => {
    var cate = props.cate;
    const [data, setData] = useState();
    useEffect(() => {
        api.getMovies().then((json)=> {console.log(json.result);setData(json.result);})

    }, []);
    
    let navigate = useNavigate(); 
    if(!data) return null;

    return(

        <main>
        <article>

            <section class="upcoming">
                <div class="container">

                <div class="flex-wrapper">

                    <div class="title-wrapper">
                    <p class="section-subtitle ms-4">Categories</p>

                    </div>

                    <ul class="filter-list">

                    <li>
                        <button class="filter-btn" onClick={()=>{navigate("/marvel")}}>Marvel</button>
                    </li>

                    <li>
                        <button class="filter-btn" onClick={()=>{navigate("/comedy")}}>Comedy</button>
                    </li>

                    <li>
                        <button class="filter-btn" onClick={()=>{navigate("/anime")}} >Anime</button>
                    </li>

                    </ul>

                </div>
                {cate!="comedy"&&cate!="anime"&&<h2 class="h2 section-title">Marvel</h2>}    

                <ul class="movies-list ">




                        {   
                            
                            cate!="comedy"&&cate!="anime"&&data.map((Data, i) =>
                                    <InsertMovie data = {Data} cate={"marvel"}/>
                        )}      

                </ul>
                {cate!="marvel"&&cate!="anime"&&<h2 class="h2 section-title">Comedy</h2>}
                <ul class="movies-list ">
                        {
                                cate!="marvel"&&cate!="anime"&&data.map((Data, i) =>
                                    <InsertMovie data = {Data} cate={"comedy"}/>
                        )}    
                </ul>        
                {cate!="comedy"&&cate!="marvel"&&<h2 class="h2 section-title">Anime</h2>}
                <ul class="movies-list ">
                        {
                                cate!="comedy"&&cate!="marvel"&&data.map((Data, i) =>
                                    <InsertMovie data = {Data} cate={"anime"}/>
                        )}
                </ul>    
                </div>
            </section>
        </article>    
    </main>

    ) 
}
export default Body;
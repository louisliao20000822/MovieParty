
import './style.css'
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState} from 'react';
import api from '../api/api'
import './movie.css'
import InsertMovie from '../components/InsertMovie'

const Body = () => {
    var filter;
    const [data, setData] = useState();
    useEffect(() => {
        api.getMovies().then((json)=> {console.log(json.result);setData(json.result);})

    }, []);
    

    if(!data) return null;

    return(

        <main>
        <article>

            <section class="upcoming">
                <div class="container">

                <div class="flex-wrapper">

                    <div class="title-wrapper">
                    <p class="section-subtitle">Online Streaming</p>

                    </div>

                    <ul class="filter-list">

                    <li>
                        <button class="filter-btn" onClick={()=>{filter = "marvel"}}>Marvel</button>
                    </li>

                    <li>
                        <button class="filter-btn" onClick={()=>{filter = "comedy"}}>Comedy</button>
                    </li>

                    <li>
                        <button class="filter-btn" onClick={()=>{filter = "marvel"}} >Anime</button>
                    </li>

                    </ul>

                </div>
                <h2 class="h2 section-title">Marvel</h2>    

                <ul class="movies-list ">




                        {
                                data.map((Data, i) =>
                                    <InsertMovie data = {Data} cate={"marvel"}/>
                        )}      

                </ul>
                <h2 class="h2 section-title">Comedy</h2>
                <ul class="movies-list ">
                        {
                                data.map((Data, i) =>
                                    <InsertMovie data = {Data} cate={"comedy"}/>
                        )}    
                </ul>        
                <h2 class="h2 section-title">Anime</h2>
                <ul class="movies-list ">
                        {
                                data.map((Data, i) =>
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

import './style.css'
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState} from 'react';
import api from '../api/api'
import './movie.css'
import InsertMovie from '../components/InsertMovie'

const Body = () => {
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

                    <h2 class="h2 section-title">Movies</h2>
                    </div>

                    <ul class="filter-list">

                    <li>
                        <button class="filter-btn">Movies</button>
                    </li>

                    <li>
                        <button class="filter-btn">TV Shows</button>
                    </li>

                    <li>
                        <button class="filter-btn">Anime</button>
                    </li>

                    </ul>

                </div>

                <ul class="movies-list ">




                        {
                                data.map((Data, i) =>
                                    <InsertMovie data = {Data} />
                        )}      

                </ul>

                </div>
            </section>
        </article>    
    </main>

    ) 
}
export default Body;
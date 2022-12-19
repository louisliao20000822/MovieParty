import './insertMovie.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import api from "../api/api"

function InsertMovie(props){
    let navigate = useNavigate(); 
    let mId = props.data.mId;
    let name = `favDialog${mId}`
    function dialog(){
        if(!localStorage.getItem('Name'))
            alert("請先登入");
        else{
            const favDialog = document.getElementById(name);
            console.log(props.data.mId);
            mId = props.data.mId;
            if(favDialog!= null)
                favDialog.showModal();
        }        
    }
    function navi_party(){
        
        api.getRoom(data.mId).then((json)=> {console.log(json);navigate(`/Party/${data.mId}?room=${json.rId}`);})
    }

    function navi_movie(){
        navigate(`/Movie/${mId}`);
    }

    function close(){
        const favDialog = document.getElementById(name);
        if(favDialog!= null)
            favDialog.hidden = true;
    }
    const data = props.data;
    var image = `../images/${data.image}`;
    console.log(image);
    return(

        <li>
            <div class="movie-card">
                <figure class="card-banner">
                    <img className="main-img" src= {data.image} onClick={() => dialog()} />
                </figure>

            <div class="title-wrapper">
                    <a href="./movie-details.html">

                        <h3 class="card-title">{props.data.title}</h3>
                    </a>

                    <time datetime="2022">{props.data.year}</time>
                    </div>

                    <div class="card-meta">
                    <div class="badge badge-outline">HD</div>

                    <div class="duration">
                        <ion-icon name="time-outline"></ion-icon>

                        <time datetime="PT137M">{props.data.time}min</time>
                    </div>

                    <div class="rating">
                        <ion-icon name="star"></ion-icon>

                        <data>{ Math.floor(props.data.rating*10)/10}</data>
                    </div>
                    </div>

            </div>
            <div>
                    <dialog id={name}>
                        <form method="dialog">
                            <h3>{data.title}</h3><br/>
                            <button onClick={() => navi_movie()}>watch Online</button>
                            <button onClick={() => navi_party()}>watch with friends</button>
                            <button  value="cancel">Close</button>
                        </form>
                    </dialog>
                    <output></output>

            </div>
        </li>

    )

};

export default InsertMovie;
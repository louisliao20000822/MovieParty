import './insertMovie.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import api from "../api/api"

function InsertMovie(props){
    let navigate = useNavigate(); 
    let mId = props.data.mId;
    let name = `favDialog${mId}`;
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
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
        let r = generateString(9);
        api.getRoom(data.mId,r).then((json)=> {console.log(json);navigate(`/Party/${r}?room=${json.rId}`);})
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
    if(props.data.category!=props.cate) return null;
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
                    <dialog id={name} className="dialog">
                        <form method="dialog"  >
                            <div className="modal-my justify-content-center d-flex flex-column">
                                <h3 className='title mb-2'>{data.title}</h3>
                                <img className="mb-4"  src={data.image}/>
                            </div>    
                                <button className='modal__btn' onClick={() => navi_movie()}>watch Online</button>
                                <button className='modal__btn'  onClick={() => navi_party()}>watch with friends</button>
                                <button  className='modal__btn' value="cancel">Close</button>

                        </form>
                    </dialog>
                    <output></output>

            </div>
        </li>

    )

};

export default InsertMovie;
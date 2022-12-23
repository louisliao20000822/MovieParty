import './insertMovie.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import api from "../api/api"

function FriendList(props){
    let navigate = useNavigate(); 
 
    return(

        <li>
            <a href="#">
                <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                <div class="friend-info">
                    <h4>{props.name}</h4>
                </div>
            </a>
        </li>

    )

};

export default FriendList;
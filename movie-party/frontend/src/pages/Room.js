import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './chat.css'
import ChatBoxMovie from '../components/ChatBoxMovie';
import webSocket from 'socket.io-client'
import ProgressBar from '../components/ProgressBar';
import {useParams,useLocation} from "react-router-dom";
import Party from './Party';
import FriendList from '../components/FriendList';
const Room = () => {


    const useQuery = () => new URLSearchParams(useLocation().search);
    const code = useParams();
    const query = useQuery();
    const [mId,setmId] = useState();
    useEffect(() => {
        console.log(code.mId);
        (async () => {
            const response = await axios.get(
              `http://44.235.8.206:4000/api/1.0/chat/room/${code.mId}?room=${query.get('room')}`
            ); 
            console.log(response.data.result);
            setmId(response.data.result[0].mId);
        })();
        
      }, [mId]);
    // const [data, setData] = useState();
    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get(
    //           `http://44.235.8.206:4000/friendlist`
    //         ); 
    //         console.log(response.data[query.get('room')]);
    //         const interval = setTimeout(() => {
    //           setData(response.data[query.get('room')]);
    //         }, 100);
    //     })();
    //   }, [data]);

     if(!mId) return null;

    return(
        <div>
            <Party mId={mId}/>
            <div class="profile-container">
                <div class="row row-space-20">
                    <div class="col-md-8">
                        <div class="tab-content p-0">

                            <div class="tab-pane fade active show" id="profile-friends">
                                <div class="m-b-10"><b>Friend List (9)</b></div>

                                <ul class="friend-list clearfix">
                                    {/* <li>
                                        <a href="#">
                                            <div class="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                            <div class="friend-info">
                                                <h4>Sancho Aldo</h4>
                                                <p>392 friends</p>
                                            </div>
                                        </a>
                                    </li> */}
                                    {/* { data?.map((name) =>
                                        <FriendList name={name}/>
                                    )}     */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>    
    );


};

export default Room;
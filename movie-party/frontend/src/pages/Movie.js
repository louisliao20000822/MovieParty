import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './chat.css'
import ChatBoxMovie from '../components/ChatBoxMovie';
import webSocket from 'socket.io-client'
import ProgressBar from '../components/ProgressBar';
import {useParams,useLocation} from "react-router-dom";

const Movie = () => {
    const refvideo = useRef();
    const [data, setData] = useState([[]]);
    const [connect,setconnect] = useState(0);
    var {mId} = useParams();



    useEffect(() => {
        (async () => {
            const response = await axios.get(
              `http://44.235.8.206/video${mId}`
            ); 
            setData(response.data.result);
        })();
        
      }, []);

    // useEffect(() => {

    //         const response = await axios.get(
    //           "http://localhost:4000/api/1.0/chat/spider-man?mId=1"
    //         ); 
    //         const interval = setTimeout(() => {
    //           setData(response.data.result);
    //         }, 100);
    //   }, []);  

     


    return(
        <>
            <div className="container d-flex justify-content-center">
            <figure>
              <video  width="1200" height="640" controls  ref={refvideo} id="video" className='movie-box' src= {`http://localhost:4000/video${mId}`} ></video>

            </figure>

                <ChatBoxMovie mId={mId} />
            </div>
            
        </>
    );


};

export default Movie;
import axios from 'axios';
import { useEffect, useState,useRef } from 'react';
import '../pages/bar.css'

const ProgressBar = (video) => {

    var progress;

    function progressLoop() {

           console.log(video); 

    }
    useEffect(()=>{
        progress = document.getElementById("progress");
        progressLoop();
      },[])
    return(
        <>
            <figcaption>
                <button id="play" aria-label="Play" role="button">►</button>
                <progress id="progress" max="100" value="0">Progress</progress>
                
            </figcaption>
        </>
    );


};

export default ProgressBar;
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './chat.css'
import './video.css'
import ChatBoxParty from '../components/ChatBoxParty';
import webSocket from 'socket.io-client'
import ProgressBar from '../components/ProgressBar';
import {useParams,useLocation, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Party = () => {
    var {mId} = useParams();
    console.log(mId);
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    let navigate = useNavigate(); 
    const refvideo = useRef();
    const [data, setData] = useState([[]]);
    const [ws,setWs] = useState(null)
    const [connect,setconnect] = useState(0);
    var socket;

    if(!localStorage.getItem('Name')){
    alert("請先登入");
    navigate("/")
    }
    const connectWebSocket = () => {
        //開啟
         setWs(webSocket('http://44.235.8.206'));
    }



    useEffect(() => {
      connectWebSocket();
      // progressLoop();
      console.log(mId);
    },[]);

    useEffect(()=>{
      if(ws){
          //連線成功在 console 中打印訊息
          ws.emit('join', {"room" : query.get('room')});
          console.log('success connect!')
          //設定監聽

          initWebSocket();

      }
    },[ws])

    function handleEvent(){
      var movie = document.querySelector(".movie-box");
      console.log("clickseek");
    }

    useEffect(() => {
        (async () => {
            const response = await axios.get(
              `http://44.235.8.206/video`
            ); 
            setData(response.data.result);
        })();
        if(ws){
          var movie = document.querySelector(".movie-box");
          const playBtn = document.getElementById('play-btn');
          playBtn.addEventListener('click', handleclick);
          sendMessageLess({"new" : "new_connection","room" : query.get('room'),"name" :localStorage.getItem('Name')});
        }  
      }, [ws]);



      useEffect(() => {
        /*target elements*/
        const player = document.querySelector('.player');
        const video = player.querySelector('.viewer');
  
        const progressRange = document.querySelector('.progress-range');
        const progressBar = document.querySelector('.progress-bar');
        const currentTime = document.querySelector('.time-elapsed');
        const duration = document.querySelector('.time-duration');
  
        const playBtn = document.getElementById('play-btn');
        const stopBtn = player.querySelector('.stop');
  
        const skipButtons = player.querySelectorAll('[data-skip]');
  
        const speakerIcon = player.querySelector('#speaker_icon');
        const ranges = player.querySelectorAll('.player_slider');
        /* MUTE button */
        const speaker = player.querySelector('.speaker');
        const volInput = player.querySelector('input[name="volume"]')
        //const speakerIcon = player.querySelector('#speaker_icon'); 
  
        // show play button when paused
        function showPlayIcon() {
          playBtn.classList.replace('fa-pause', 'fa-play');
          playBtn.setAttribute('title', 'Play');
        }
  
        // toggle between play and pause
        // function handleclick() {
        //   if (video.paused) {
        //     video.play();
        //     playBtn.classList.replace('fa-play', 'fa-pause');
        //     playBtn.setAttribute('title', 'Pause');
        //   } else {
        //     video.pause();
        //     showPlayIcon();
        //   }
        // }
  
        // Stop video
        function stopVideo() {
          video.currentTime = 0;
          video.pause();
        }
  
        // not sure, is this for FF and REW?
        function skip() {
          video.currentTime += +(this.dataset.skip);
        }
  
        // volume functions
        function handleRangeUpdate() {
          video[this.name] = this.value;
          (video['volume'] === 0 ? speakerIcon.className = "fa fa-volume-off" :
            speakerIcon.className = "fa fa-volume-up")
        }
  
        let muted = false;
  
        function mute() {
          if (!muted) {
            video['volume'] = 0;
            volInput.value = 0;
            speakerIcon.className = "fa fa-volume-off"
            muted = true;
          } else {
            video['volume'] = 1;
            volInput.value = 1;
            muted = false;
            speakerIcon.className = "fa fa-volume-up"
          }
        }
  
        // update progress bar as the video plays
        function updateProgress() {
          progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
          currentTime.textContent = `${displayTime(video.currentTime)} /`;
          duration.textContent = `${displayTime(video.duration)}`;
        }
        // Calculate display time format
        function displayTime(time) {
          const minutes = Math.floor(time / 60);
          let seconds = Math.floor(time % 60);
          seconds = seconds > 9 ? seconds : `0${seconds}`;
          return `${minutes}:${seconds}`;
        }
  
        // Click to seek within the video
        function setProgress(e) {
          const newTime = e.offsetX / progressRange.offsetWidth;
          progressBar.style.width = `${newTime * 100}%`;
          video.currentTime = newTime * video.duration;
        }
  
        function scrub(event) {
          const scrubTime = (event.offsetX / progressRange.offsetWidth) * video.duration;
          video.currentTime = scrubTime;
        }
  
        // Spacebar used to play and pause
        document.body.onkeyup = function (e) {
          if (e.keyCode == 32) {
            handleclick();
          }
        }
  
        // =======================
        video.addEventListener('timeupdate', updateProgress);
        video.addEventListener('canplay', updateProgress);
        progressRange.addEventListener('click', setProgress);
        // ===================
        /*functions linked to elements*/
        // play, pause, stop
        video.addEventListener('keydown', (event) => event.keyCode === 32 && handleclick());
        // playBtn.addEventListener('click', handleclick);
        stopBtn.addEventListener('click', stopVideo);
        // skip forward or backward
        skipButtons.forEach(button => button.addEventListener('click', skip));
        // volume
        ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
        ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
        speaker.addEventListener('click', mute)
  
        // progress bar controls
        let mouseDown = false;
        progressRange.addEventListener('click', scrub);
        progressRange.addEventListener('mousemove', (event) => mouseDown && scrub(event));
        progressRange.addEventListener('mousedown', () => mouseDown = true);
        progressRange.addEventListener('mouseup', () => mouseDown = false);
  
        //fullscreen mode 
        const screen_size = player.querySelector('.screenSize');
        const controls = player.querySelector('.player_controls');
        const screenSize_icon = player.querySelector('#screenSize_icon');
  
        function changeScreenSize() {
          if (player.mozRequestFullScreen) {
  
            player.mozRequestFullScreen();
            //change icon
            screenSize_icon.className = "fa fa-compress";
            /*control panel once fullscreen*/
            video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)');
            video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
            controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
            screen_size.addEventListener('click', () => {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                screenSize_icon.className = "fa fa-expand";
              }
            });
          } else if (player.webkitRequestFullScreen) {
  
            player.webkitRequestFullScreen();
  
            screenSize_icon.className = "fa fa-compress";
  
            video.addEventListener('mouseout', () => controls.style.transform = 'translateY(100%) translateX(-5px)');
            video.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
            controls.addEventListener('mouseover', () => controls.style.transform = 'translateY(0)');
            screen_size.addEventListener('click', () => {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
                screenSize_icon.className = "fa fa-expand";
              }
            });
          }
        }
        screen_size.addEventListener('click', changeScreenSize);
      }, []);


    // useEffect(() => {

    //         const response = await axios.get(
    //           "http://localhost:4000/api/1.0/chat/spider-man?mId=1"
    //         ); 
    //         const interval = setTimeout(() => {
    //           setData(response.data.result);
    //         }, 100);
    //   }, []);  

      const initWebSocket = () => {
        //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
        ws.on('getMessage', message => {
          console.log(message)
        })
        ws.on('getMessageid', (message) => {
          console.log(message);
          var movie = document.querySelector(".movie-box");
          movie.currentTime = message.time; 

        })

        ws.on('getMessageAll', message => {
            console.log(message);
            var movie = document.querySelector(".movie-box");
            const playBtn = document.getElementById('play-btn');
            if(message.connect){
              setconnect(movie.currentTime);
            }
            if(message.time){
              movie.pause();
              movie.currentTime = message.time;
              showPlayIcon();

            }
            if(message.playing=="play"){
              movie.play();
              playBtn.classList.replace('fa-play', 'fa-pause');
              playBtn.setAttribute('title', 'Pause');
            }

            else if (message.playing=="pause"){
              movie.pause();
              showPlayIcon();
            }
        })

        ws.on('getMessageLess', message => {
            console.log(message);
            var movie = document.querySelector(".movie-box");
            if(message.connect){
              sendMessageid(message.connect,{time : movie.currentTime,playing : movie.paused,"room" : query.get('room')});
            } 
            if(message.new){
              movie.pause();
              showPlayIcon();
            }
        })
        ws.on('connect' , () => {
          sendMessageLess({connect : ws.id,"room" : query.get('room')})
        });   
      }

    const sendMessage = (message) => {
      //以 emit 送訊息，並以 getMessageAll 為名稱送給 server 捕捉
      console.log(message);
      console.log(ws);
      ws.emit('getMessageAll', message);
    }

    const sendMessageLess = (message) => {
      //以 emit 送訊息，並以 getMessageLess 為名稱送給 server 捕捉
      console.log(message);
      ws.emit('getMessageLess', message);
    }

    const sendMessageid = (id,message) => {
      //以 emit 送訊息，並以 getMessageid 為名稱送給 server 捕捉
    
      ws.emit('getMessageid', id,message);
    }

    function showPlayIcon() {
      const playBtn = document.getElementById('play-btn');
      playBtn.classList.replace('fa-pause', 'fa-play');
      playBtn.setAttribute('title', 'Play');
    }

    function handleseek(event){
      event.preventDefault();
      console.log("seek");
      var movie = document.querySelector(".movie-box");
      sendMessage({time : movie.currentTime,"room" : query.get('room')});
    }
        
    function handleclick(event){
      event.preventDefault();
      var movie = document.querySelector(".movie-box");
      console.log(movie.paused);
      console.log(ws.id);
      var message;
      if(movie.paused)
        message ={playing : "play","room" : query.get('room')};
      else
        message = {playing : "pause","room" : query.get('room')};  
      sendMessage(message);
    }

    // function progressLoop() {
    //   var movie = document.querySelector(".movie-box");
    //   setInterval(function () {
    //     document.getElementById("progress").value = Math.round(
    //       (movie.currentTime / movie.duration) * 100
    //     );
    //   });
    // }



    return(
        <>
            <div className="container d-flex justify-content-center">
              <body>
                <div className="video-box">
                  <div className="player" id="player">
                    <video className="player_video viewer movie-box"  ref={refvideo} id="video" src={`http://44.235.8.206/video${mId} `} onClick={handleclick}></video>
                    <div className="player_controls" onClick={handleseek}>
                      <div className="progress-range" title="Jump-to">
                        <div className="progress-bar" ></div>
                      </div>
                      <div className="left-controls">
                        <button className="player_button toggle" title='Toggle Play'><i className="fa fa-play" title="Play" id="play-btn"></i></button>
                        <button className="player_button stop" title='Start over'><i className="fa fa-stop" title="Play" id="stop-btn"></i></button>
                        <button className="player_button speaker"><i id="speaker_icon" className="fa fa-volume-up" aria-hidden="true"></i></button>
                        <input type="range" name="volume" className="player_slider" min="0" max="1" step="0.05" value="1"></input>
                      </div>
                      <div className="right-controls">
                        <button data-skip="-10" className="player_button"><i className="fa fa-fast-backward" aria-hidden="true"></i></button>
                        <button data-skip="10" className="player_button"><i className="fa fa-fast-forward" aria-hidden="true"></i></button>
                        <div className="time">
                          <span className="time-elapsed">00:00 / </span>
                          <span className="time-duration">2:38</span>
                        </div>
                        <button className="player_button screenSize"><i id="screenSize_icon" className="fa fa-expand" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </body>

                <ChatBoxParty mId={mId} rId={query.get('room')}/>
            </div>
            
        </>
    );


};

export default Party;
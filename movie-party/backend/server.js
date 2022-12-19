const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());
app.use(express.static('public'))
app.use('/api/1.0',require('./route/chat'));
app.use('/api/1.0',require('./route/movie'));
app.use('/api/1.0',require('./route/user'));





app.get('/video1',(req,res) =>{
    const VIDEO_FILE_PATH = 'assert/spiderman.mp4'
    const resolverPath = path.resolve(VIDEO_FILE_PATH);
    res.sendFile(resolverPath);
})

app.get('/video2',(req,res) =>{
    const VIDEO_FILE_PATH = 'assert/avengers.mp4'
    const resolverPath = path.resolve(VIDEO_FILE_PATH);
    res.sendFile(resolverPath);
})

app.get('/video3',(req,res) =>{
    const VIDEO_FILE_PATH = 'assert/captain-america.mp4'
    const resolverPath = path.resolve(VIDEO_FILE_PATH);
    res.sendFile(resolverPath);
})

app.get('/video3',(req,res) =>{
    const VIDEO_FILE_PATH = 'assert/iron-man.mp4'
    const resolverPath = path.resolve(VIDEO_FILE_PATH);
    res.sendFile(resolverPath);
})
app.get('/video3',(req,res) =>{
    const VIDEO_FILE_PATH = 'assert/thor.mp4'
    const resolverPath = path.resolve(VIDEO_FILE_PATH);
    res.sendFile(resolverPath);
})



const server = app.listen(4000, () => {
	console.log('The application is running on localhost:4000!')
});

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

//監聽 Server 連線後的所有事件，並捕捉事件 socket 執行
io.on('connection', socket => {
    //經過連線後在 console 中印出訊息
    console.log('success connect!')
    socket.on('join', message => {
        //回傳 message 給發送訊息的 Client
        socket.join(message.room)
    })
    //監聽透過 connection 傳進來的事件
    socket.on('getMessage', message => {
        //回傳 message 給發送訊息的 Client
        socket.to(message.room).emit('getMessage', message)
    })
    socket.on('getMessageAll', message => {
        io.sockets.to(message.room).emit('getMessageAll', message)
    })
    
    socket.on('getMessageLess', message => {
        socket.broadcast.to(message.room).emit('getMessageLess', message)
    })
    socket.on('getMessageid', (id,message) => {
        console.log(id);
        io.to(id).emit("getMessageid", message);
    })
    
})
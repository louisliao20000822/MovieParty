const router = require('express').Router();

const {
    getChat,insertChat,createRoom,getChatMovie,insertChatMovie
} = require('../controller/chat_controller');


router.post('/party/insertchat', async function(req, res, next){
    console.log(req.body);
    var result = await insertChat(req,res);
    return result;
});

router.post('/movie/insertchat', async function(req, res, next){
    console.log(req.body);
    var result = await insertChatMovie(req,res);
    return result;
});

router.get('/chat/movie/:mId' , async function(req, res, next){
    var result = await getChatMovie(req,res);
    return result;
});    

router.get('/chat/party/:mId' , async function(req, res, next){
        var result = await getChat(req,res);
        return result;
});    

router.get('/chat/room/:id' , async function(req, res, next){
    
    var result = await getRoom(req,res);
    return result;
});    

router.post('/party/createroom' , async function(req, res, next){
    console.log(req.body);
    var result = await createRoom(req,res);
    res.status(200).send({rId : result});
});    



module.exports = router;    
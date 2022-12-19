const Chat = require('../model/chat_model');

const getChat = async (req,res) =>{
    var id = req.params.mId;
    var rId = req.query.room;
    const result = await Chat.getChat(id,rId);
    res.status(200).send({
        result:result
    })
}

const getRoom = async (req,res) =>{
    var rId = req.params.room;
    const result = await Chat.getRoom(rId);
    res.status(200).send({
        result:result
    })
}

const getChatMovie = async (req,res) =>{
    var id = req.params.mId;
    console.log(req.query.time);
    const result = await Chat.getChatMovie(req.query.time,id);
    res.status(200).send({
        result:result
    })
}

const insertChat = async (req, res) => {
    const body = {
        mId: req.body[0].mId,
        user_name: req.body[0].user_name,
        content : req.body[0].content,
        report_time: req.body[0].report_time,
        rId : req.body[0].rId
    };

    const chatId = await Chat.insertChat(body);
    if (chatId === -1) {
        res.status(500);
    } else {
        res.status(200).send({chatId});
    }
};

const insertChatMovie = async (req, res) => {
    const body = {
        mId: req.body[0].mId,
        user_name: req.body[0].user_name,
        content : req.body[0].content,
        report_time: req.body[0].report_time,
        time: req.body[0].time
    };

    const chatId = await Chat.insertChatMovie(body);
    if (chatId === -1) {
        res.status(500);
    } else {
        res.status(200).send({chatId});
    }
};

const createRoom = async (req,res) =>{
    const insertID = await Chat.createRoom(req.body[0].mId);
    console.log(insertID);
    return insertID;
    
}


module.exports = {
    getChat,
    getChatMovie,
    insertChatMovie,
    insertChat,
    createRoom,
    getRoom
};
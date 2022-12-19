const mysql = require('../db/db.js')


const getChat = async (mId,rId) => {
    const result = await mysql.query('SELECT * FROM chat WHERE mId = ? and rId = ?',[mId,rId]);
    return result;
}

const getRoom = async (rId) => {
    const result = await mysql.query('SELECT * FROM party WHERE rId = ?',[rId]);
    return result;
}


const getChatMovie = async (time,mId) => {
    const result = await mysql.query('SELECT * FROM chat_movie WHERE mId = ? and time < ?',[mId, parseFloat(time)]);
    return result;
}

const insertChat = async (chat) => {

        var result = await mysql.query('INSERT INTO chat  (mId,user_name,content,report_time,rId) VALUES (?,?,?,?,?)',
                                        [chat.mId,chat.user_name,chat.content,chat.report_time,chat.rId]);
                               
    return result;
}    
const insertChatMovie = async (chat) => {
        var result = await mysql.query('INSERT INTO chat_movie  (mId,user_name,content,report_time,time) VALUES (?,?,?,?,?)',
                                        [chat.mId,chat.user_name,chat.content,chat.report_time,chat.time]);
                                
    return result;
}    

const createRoom = async(mId) =>{
    const result = await mysql.query('INSERT INTO party (mId) VALUES (?)',[mId]);
    console.log(result.insertId);
    return result.insertId;    
}

module.exports = {
    getChat,
    getChatMovie,
    insertChatMovie,
    insertChat,
    createRoom,
    getRoom
}    
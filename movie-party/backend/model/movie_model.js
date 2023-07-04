const mysql = require('../db/db.js')


const getMovie = async () => {
    const result = await mysql.query('SELECT * FROM movie');
    return result;
}

const insertChat = async (chat) => {
    const result = await mysql.query('INSERT INTO chat  (mId,user_name,content,report_time) VALUES (?,?,?,?)',
                                        [chat.mId,chat.user_name,chat.content,chat.report_time]);
    return result;
}    

module.exports = {
    getMovie,
    insertChat,
}    
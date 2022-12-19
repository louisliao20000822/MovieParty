const Movie = require('../model/movie_model');

const getMovie = async (req,res) =>{
    var id = req.query.mId;
    const result = await Movie.getMovie(id);
    res.status(200).send({
        result:result
    })
}

const insertChat = async (req, res) => {
    const body = {
        mId: req.body[0].mId,
        user_name: req.body[0].user_name,
        content : req.body[0].content,
        report_time: req.body[0].report_time
    };

    const chatId = await Chat.insertChat(body);
    if (chatId === -1) {
        res.status(500);
    } else {
        res.status(200).send({chatId});
    }
};

module.exports = {
    insertChat,
    getMovie,
}
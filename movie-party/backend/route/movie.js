const router = require('express').Router();

const {
    getMovie
} = require('../controller/movie_controller');

router.get('/movie/get', async function(req, res, next){
    console.log(req.body);
    var result = getMovie(req,res);
    return result;
});

router.post('/movie/insert', async function(req, res, next){
    console.log(req.body);
    var result = insertChat(req,res);
    return result;
});

router.get('/movie/:movie_id' , async function(req, res, next){
        var result = getChat(req,res);
        return result;
});    




module.exports = router;    
const router = require('express').Router();

const {
    LoginUser,CreateUser
} = require('../controller/user_controller');

router.post("/signIn",async (req,res) => {

    Token = await LoginUser(req,res);
    res.send(Token);


});

router.post("/signUp",async (req,res) => {
    console.log(req.body);
	var ID =await CreateUser(req,res);
    res.send(ID);
});

router.get("/party/playing", async (req,res) => {
	var state =await videoState(req,res);
    res.send(state);
});

module.exports = router;    
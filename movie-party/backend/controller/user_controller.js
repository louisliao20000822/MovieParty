const User = require('../model/user_model');
const bcrypt = require("bcrypt");

async function  LoginUser (req,res){
    const password = req.body.password;
	const user_name = req.body.user_name;
	try{
		Token = await User.LoginUser(user_name,password);
		return Token;
	}catch(err){
		return error;
	}

}

async function  CreateUser (req,res){
	const user_name = req.body.user_name
	const hashedPassword = await bcrypt.hash(req.body.password,10);
	try{
		return await User.CreateUser(user_name,hashedPassword);
	}catch (err) {
		return err;
	}
}

async function  videoState (req,res){
	var playing = req.boby.playing 

	return await User.videoState(playing,req.body.mId);

}


module.exports = {
    LoginUser,
    CreateUser,
	videoState

};
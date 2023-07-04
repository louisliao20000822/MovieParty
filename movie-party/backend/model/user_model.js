const mysql = require('../db/db.js')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


async function  LoginUser (user_name,password){
	const  userExist  = (await mysql.query(` SELECT * FROM user WHERE user_name =  ?`
										,[user_name]));
	if(userExist.length == 0){
		console.log("user_name does not exists")
		return ({msg : "user name does not exists"});
	}								
	else {
		const hashedPassword = userExist[0].password;
		if (await bcrypt.compare(password, hashedPassword)) {
			console.log("---------> Login Successful");
			let jwtSecretKey = process.env.JWT_SECRET_KEY;
			let header = {
				"alg": "HS256",
				"typ": "JWT",
				"sub": "1234567890",
				"user_name": userExist[0].user_name,
				"admin": true
			}

		  	const token = jwt.sign(header, jwtSecretKey);
			return({msg : "登入成功"});
			} 
		else {
			console.log("---------> Password Incorrect");
			return({msg : "Password incorrect!"});
		} 
	}
}

async function  CreateUser (user_name,hashedPassword){
	const  user_nameExist  = (await mysql.query(` SELECT * FROM user WHERE user_name =  ?`
										,[user_name]));
	if(user_nameExist.length != 0){
 	   console.log("user_name already exists")
	   return ({msg : "user name already exists"});
	}								
	else {
		await mysql.query ("INSERT INTO user VALUES (0,?,?)", [user_name,hashedPassword]);
		return ({msg : "註冊成功"});
	}
}

async function  videoState (playing,mId){
	const  user_nameExist  = (await mysql.query(` UPDATE party SET playing = ? WHERE mId = ? `
										,[playing,mId]));
	if(user_nameExist.length != 0){
 	   console.log("user_name already exists")
	   return ("user_name already exists");
	}								
	else {
		await mysql.query ("INSERT INTO userTable VALUES (0,?,?,?)", [user,user_name,hashedPassword]);
		return ("success");
	}
}


module.exports = {
    LoginUser,
    CreateUser
}    
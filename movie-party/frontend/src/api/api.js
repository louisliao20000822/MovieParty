import axios from "axios";

export default {
    getMovies: async () => {
        return  fetch('http://localhost:4000/api/1.0/movie/get')
        .then(res => 
            res.json())
    },
    getRoom: async (mId) => {
        return  fetch('http://localhost:4000/api/1.0/party/createroom', {
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/json',
              }),
            body: JSON.stringify([{"mId":mId}])
            })
        .then(res => 
            res.json())
    },
    signUp: async (user_name,password) => {
        return  fetch('http://localhost:4000/api/1.0/signUp', {
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/json',
              }),
            body: JSON.stringify({ "user_name" : user_name,
                                    "password" : password})
            })
        .then(res => 
            res.json())
    },
    signIn: async (user_name,password) => {
        return  fetch('http://localhost:4000/api/1.0/signIn', {
            method: 'POST',
            headers:new Headers({
                'Content-Type': 'application/json',
              }),
            body: JSON.stringify({ "user_name" : user_name,
                                    "password" : password})
            })
        .then(res => 
            res.json())
    },

}


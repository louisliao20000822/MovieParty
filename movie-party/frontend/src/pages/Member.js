
import './member.css'
import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState} from 'react';
import api from '../api/api'
import { useNavigate } from "react-router-dom";

const Member = () => {
    const [signup, setSignup] = useState();
    let navigate = useNavigate(); 
    useEffect(() => {
        

    }, [signup]);

    function signIn(event){
        event.preventDefault()
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
        api.signIn(formProps.name,formProps.password).then((json)=> {console.log(json);localStorage.setItem("Name", formProps.name);navigate("/");})
    }
    const signUp = event =>{
        event.preventDefault()
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        api.signUp(formProps.name,formProps.password).then((json)=> {console.log(json);})
    }
    return(
        <div class="wrapper fadeInDown mt-5">
            <link rel="stylesheet" href="mystyle.css"></link>
            {!signup && <div id="formContent">
                <h2 class="active"> Sign In </h2>
                <h2 class="inactive underlineHover" onClick={() => {setSignup(true)}}>Sign Up </h2>

                <div class="fadeIn first">
                <img src = {require('../images/logo.png')} id="icon" alt="User Icon" />
                </div>

                <form onSubmit={signIn}>
                    <input type="text" id="login" class="fadeIn second" name="name" placeholder="User Name"/>
                    <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password"/>
                    <input type="submit"value="Log In"/>
                </form>


                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>}
            {signup &&
            <div id="formContent">
                <h2 class="inactive underlineHover" onClick={() => {setSignup(false)}}> Sign In </h2>
                <h2 class="active">Sign Up </h2>

                <div class="fadeIn first">
                <img src = {require('../images/logo.png')} id="icon" alt="User Icon" />
                </div>

                <form onSubmit={signUp}>
                    <input type="text" id="login" class="fadeIn second" name="name" placeholder="User Name"/>
                    <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password"/>
                    <input type="password" id="password" class="fadeIn third" name="c_password" placeholder="Password"/>
                    <input type="submit" value="Log In" />
                </form>


                <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>}
        </div>
    
) 
}
export default Member;
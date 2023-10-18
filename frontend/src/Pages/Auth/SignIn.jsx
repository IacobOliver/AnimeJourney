import React from "react";
import { useNavigate } from "react-router-dom";
import CostumInput from "./CostumInput";
import { useRef } from "react";
import { checking } from "../../Components/Utils";

export default function SignIn() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordConfRef = useRef(null);

  const onSubmit = () =>{
    let authResponse = {
      username : userNameRef.current.value,
      email : emailRef.current.value,
      password : passwordRef.current.value,
    }

    checking.email(emailRef)  
    checking.password(passwordRef)
    checking.username(userNameRef);
    checking.passwordConf(passwordRef, passwordConfRef)
    
    if(
    checking.email(emailRef) && 
    checking.password(passwordRef) &&
    checking.username(userNameRef) &&
    checking.passwordConf(passwordRef, passwordConfRef)
    
    ){
      fetch("http://localhost:8080/users/auth/register",{
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(authResponse)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.token)
        console.log(localStorage.getItem("token"))
      })
      .catch( err => console.error(err))
    }

  
  }


  return (<div className=" w-full h-screen flex justify-center bg-center bg-cover mt-3" style={{ backgroundImage: `url(../../../public/zoro.jpg)` }}>

    <div className=" bg-black_second_theme w-fit h-fit mt-20 rounded-xl text-fifth_color_theme font-fantasy tracking-wide p-3 flex">
      <img className="h-[30rem]" src="../../../public/form/luffy2.png" />

      <div className="w-96  flex flex-col justify-evenly">
        <p className="text-center text-3xl">Sign In</p>
        <p className="text-center"> Welcome Aboard </p>

        <div className="mt-10">
          <CostumInput placeHolder={"Username"} reff={userNameRef} icon = "user" value={"oli"}/>
          <CostumInput placeHolder={"Email"} reff={emailRef} icon = "envelope" value= {"oli@gmail.com"}/>
          <CostumInput placeHolder={"Password"} reff={passwordRef} icon = "lock" isPassword={1} value={1234567}/>
          <CostumInput placeHolder={"Password Confirmation"} reff={passwordConfRef}  icon = "lock" isPassword={1} value={1234567}/>
        </div>


        <div className="flex justify-center mt-5">
          <button onClick = {onSubmit} className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md ">
            <span className=" flex items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme font-medium">
              <p aria-disabled="true"> SUBMIT </p>
            </span>
          </button>
        </div>

        <p className="text-right mt-20">Already have an account? <button className="text-forth_color_theme text-lg" onClick={() => navigate("/logIn")}>Login </button></p>
      </div>
    </div>


  </div>)
}
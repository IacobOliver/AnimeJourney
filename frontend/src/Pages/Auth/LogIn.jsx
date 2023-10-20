import React from "react";
import { useNavigate } from "react-router-dom";
import CostumInput from "./CostumInput";
import { useRef } from "react";
import state from "../../Components/Atom";
import { useAtom } from "jotai";
import { checking, Utils } from "../../Components/Utils";
import Alert from "./Alert";


export default function LogIn() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const alertRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useAtom(state.isLoggedIn)
  const [user, setUser] = useAtom(state.user)

  const onSubmit = () =>{
    alertRef.current.classList.remove("hidden")
    alertRef.current.classList.remove("animate-jump-out")
    alertRef.current.classList.add("animate-jump-in")

    let authResponse = {
      email : emailRef.current.value,
      password : passwordRef.current.value,
    }

    checking.email(emailRef)  
    checking.password(passwordRef)
    
    if(
    checking.email(emailRef) && 
    checking.password(passwordRef)
    ){
      fetch("http://localhost:8080/users/auth/authenticate",{
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(authResponse)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.response)
        console.log(localStorage.getItem("token"))
        
        Utils.logInWithToken({setUser, setIsLoggedIn});

        navigate("/home")
      })
      .catch( err => {
        checking.invalidField(emailRef)
        checking.invalidField(passwordRef)
        alertRef.current.firstChild.textContent = "The email or password is wrong"
      
        console.error(err)})
    }
    }

    


  return (
    <div className="w-full h-screen flex justify-start flex-col items-center bg-center bg-cover mt-3" style={{ backgroundImage: `url(../../../public/zoro.jpg)` }}>

      <Alert refference={alertRef}/>


      <div className=" bg-black_second_theme w-fit h-fit mt-20 rounded-xl text-fifth_color_theme font-fantasy tracking-wide p-3 flex animate-jump-in ">
        <img className="h-[30rem]" src="../../../public/form/luffy1.png" />
        <div className="w-96 flex flex-col justify-evenly">
          <div>
            <p className="text-center text-3xl">Log In</p>
            <p className="text-center"> Hehe , Nice to see you !  </p>

            <div className="mt-10">
              <CostumInput placeHolder={"Email"} reff={emailRef} icon = "user" value={"oli@gmail.com"}/>
              <CostumInput placeHolder={"Password"} reff={passwordRef} icon = "lock" isPassword={1} value = {1234567}/>
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

            <p className="mt-20 text-right">Don't have an account? <button className="text-forth_color_theme text-lg" onClick={() => navigate("/singIn")}>Register </button></p>
          </div>
        </div>


      </div>


    </div>)
}
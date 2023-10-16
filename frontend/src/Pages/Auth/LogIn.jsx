import React from "react";
import { useNavigate } from "react-router-dom";
import CostumInput from "./CostumInput";
import { useRef } from "react";




export default function LogIn() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  return (
    <div className="bg-gray-900 w-full h-screen flex justify-center bg-center bg-cover mt-5" style={{ backgroundImage: `url(../../../public/zoro.jpg)` }}>

      <div className="w-fit bg-black_second_theme h-[30rem] mt-20 rounded-xl text-fifth_color_theme font-fantasy tracking-wide p-3 flex">

        <img src="../../../public/form/luffy1.png" />

        <div className="w-96 flex flex-col justify-evenly">

          <div>
            <p className="text-center text-3xl">Log In</p>
            <p className="text-center"> Hehe , Nice to see you !  </p>

            <div className="mt-10">
              <CostumInput placeHolder={"Email"} reff={emailRef} />
              <CostumInput placeHolder={"Password"} reff={passwordRef} />
            </div>

            <div className="flex justify-center mt-5">
              <button className="relative inline-flex items-center justify-center mr-2 overflow-hidden font-medium rounded-lg group 
                                bg-gradient-to-br from-orange-500 to-red-600 group-hover:from-orange-500 group-hover:to-red-600
                                 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 text-black_first_theme text-md ">
                <span className=" flex items-center relative px-5 py-1.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 bg-forth_color_theme font-medium">
                  <p aria-disabled="true"> SUBMIT </p>
                </span>
              </button>
            </div>

            <p className="mt-40 text-right">Don't have an account? <button className="text-forth_color_theme text-lg" onClick={() => navigate("/singIn")}>Register </button></p>
          </div>
        </div>


      </div>


    </div>)
}
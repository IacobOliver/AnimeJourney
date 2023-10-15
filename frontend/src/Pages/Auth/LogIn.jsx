import React from "react";
import { useNavigate } from "react-router-dom";




export default function LogIn(){
    const navigate = useNavigate();


    return (
        <div className="bg-gray-900 w-full h-screen flex justify-center bg-center bg-cover mt-5" style={{backgroundImage : `url(../../../public/zoro.jpg)`}}> 

        <div className="w-[28rem] bg-black_second_theme h-3/4 mt-10 rounded-xl">

        <div className="w-full flex justify-center mb-2">
      <div class="relative h-11 w-2/3 min-w-[200px]">
        <input
          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-forth_color_theme focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-third_color_theme peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-forth_color_theme peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-forth_color_theme peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      </div>

        <div className="w-full flex justify-center">
      <div class="relative h-11 w-2/3 min-w-[200px]">
        <input
          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-forth_color_theme focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
        />
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-third_color_theme peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-forth_color_theme peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-forth_color_theme peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
      </div>

        <p>Don't have an account? <button onClick={() => navigate("/singIn")}>Register </button></p>
        </div>
        
        
        </div>)
}
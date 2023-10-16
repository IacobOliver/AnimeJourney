import React, { useState } from "react";


export default function CostumInput({placeHolder, reff, icon , isPassword}){
        console.log(isPassword)
 return (
    <div className="w-full flex justify-center items-center mb-2 hover:text-third_color_theme duration-300">
        <i className={`fa-solid fa-${icon} mb-0 mr-3`}></i>
        <div className="relative h-10 w-2/3 min-w-[200px] ">
          <input
            ref = {reff}
            className="focus:ring-0 text-fifth_color_theme  peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200  placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-forth_color_theme focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            type={`${isPassword ? "password" : ""}`}
            
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-forth_color_theme transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]  peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-forth_color_theme peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-forth_color_theme peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            {placeHolder}
          </label>
        </div>
        <div className={`h-3 w-3 bg-gray-300 rounded-full ml-2 duration-300`}></div>
      </div>

 )
}
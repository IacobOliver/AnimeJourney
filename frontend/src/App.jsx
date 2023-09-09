
import './App.css'
import React from 'react'
import {useEffect, useState} from "react"

function App() {


  fetch("http://localhost:3000/popular")
  .then((response) => response.json())
  .then((animelist) => console.log(animelist));

 
  return (
    <>
    <div className="w-5 h-5 bg-blue-600"></div>
    </>
  )
}

export default App

import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore  from "./Pages/Explore"
import Layout from "./Components/Layout";



export default function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="/" element={<div className="text-white">HOME</div>}> </Route>
        <Route path="/explore" element={<Explore />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//ICON SITE
//https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid

//LOGO SITE
//https://app.logo.com/dashboard/logo_6e0425c2-abc0-430f-959a-e9326506b76b/your-logo-files

//ANIME API
//https://github.com/riimuru/gogoanime-api
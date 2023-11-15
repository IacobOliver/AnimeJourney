import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore  from "./Pages/Explore"
import Layout from "./Components/Layout/Layout";
import Redirect from "./Components/Redirect";
import ShowAnime from "./Pages/ShowAnime";
import SignIn from "./Pages/Auth/SignIn";
import LogIn from "./Pages/Auth/LogIn";
import AllAnimeCharacters from "./Pages/AllAnimeCharacters";
import AnimeList from "./Pages/AnimeList";



export default function App() {
  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path="/" element={<Redirect/>}> </Route>
        <Route path="/home" element={<Explore />}> </Route>
        <Route path="/animeList" element={<AnimeList />}> </Route>
        <Route path="/anime/:id" element ={<ShowAnime/>}/>
        <Route path="/anime/:id/characters" element ={<AllAnimeCharacters/>}/>

        <Route path="/singIn" element = {<SignIn/>}/>
        <Route path="/logIn" element = {<LogIn/>}/>
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

//componets site
//https://www.material-tailwind.com/docs/react/guide/cra


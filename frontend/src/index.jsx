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
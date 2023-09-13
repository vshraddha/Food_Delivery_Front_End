import React from "react";
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import {Routes, Route} from "react-router-dom"
import Clients from "./components/Clients";
import Price from "./components/Price";



function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Clients/>
      <Price/>



     {/* <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Clients" element={<Clients/>}/>
      <Route path="/price" element={<Price/>}/> 
      
     </Routes> */}
     
    </div>
  );
}

export default App;

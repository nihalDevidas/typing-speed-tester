import React,{useState} from "react";
import TypingPage from "./components/TypingPage";
import TypingScorePage from "./components/TypingScorePage"
import { Routes,Route} from "react-router-dom";
import image1 from "./components/images/image1.png"
import angelo2 from "./components/images/angelo2.png"
import ThemeContext from "./components/ThemeContext";

import { useContext } from "react";
import "./style.css"
import { useEffect } from "react";


function App() {

  const{theme,BlueUniverse,Darknite, HulkVerse} = useContext(ThemeContext);


  useEffect(()=>{
    console.log("changed")
    document.body.style.backgroundColor = theme.bgColor;
    document.body.style.boxShadow = theme.htmlShadow;
  },[theme])

  function setThemeValue(e){
    
    switch(e.target.value){
      case "BlueUniverse": BlueUniverse(); return
      case "Darknite": Darknite(); return
      case  "HulkVerse":HulkVerse();return
    }
  }

  return (
        <div  className="App">
          <div className="heading">

              <div className="logo-div">
                <div className="logo-text">TypinTurtle</div>
                <img className="logo-img" src={angelo2}/>
              </div>

              <div className="image-con">
              <img src ={image1}/>
              </div>
          </div>
          
          <Routes>
            <Route path = "/" element = {<TypingPage/>}/>
            <Route path = "/scorePage" element = {<TypingScorePage/>}/>
          </Routes>


          <div className="theme-container">

            <select className="select-box" onChange={(e)=>setThemeValue(e)}>
              <option value = "BlueUniverse" >BlueUniverse</option>
              <option value = "Darknite">Darknite</option>
              <option value = "HulkVerse">HulkVerse</option>
            </select>
          </div>
      
        </div>
  );
}

export default App;

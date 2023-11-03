import React from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'


let con1 = {border:"1px solid black",padding:"10px",width:"700px",height:"300px"}
let con2 = {border:"1px solid"}


const TypingScorePage = () => {
   
    const navigate = useNavigate()
    const TypingTestResult = useSelector(state=>state)

    console.log(TypingTestResult);// data is recived success
 
  return (
    <div style={con1}>
        <h1>see your typing score here</h1>

        <div style={con2}>
          typing score
        </div>

        <button onClick = {()=>navigate("/")}>Try Again</button>
    </div>
  )
}

export default TypingScorePage;

// when try again  is clicked page 1 is remounted to dom to every thing gets reset
// no need to handle reset functionality
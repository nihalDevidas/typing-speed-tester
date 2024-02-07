import React from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'





const TypingScorePage = () => {
   
    const navigate = useNavigate()
    const TypingTestResult = useSelector(state=>state)

    console.log(TypingTestResult);// data is recived success
 
  return (
    <div className='scoreContainer'>
        <h1>Typing Score</h1>

        <div className='dataContainer'>
          <div className='wpm'>WPM : {TypingTestResult.wpm}</div>
          <div className='accuracy'> Acurracy : {TypingTestResult.accuracy}%</div>
          <div className='accuracy'> Mistakes : {TypingTestResult.mistakes}</div>
        </div>

         <div className='btndiv'>
        <button onClick = {()=>navigate("/typing-speed-tester")}>Try Again</button>
        </div>
    </div>
  )
}

export default TypingScorePage;

// when try again  is clicked page 1 is remounted to dom to every thing gets reset
// no need to handle reset functionality
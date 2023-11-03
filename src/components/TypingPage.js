import React, {useState,useEffect} from "react";
import TypingContainer from "../components/TypingContainer";
import TimerSetters from "../components/TimerSetters";
import {useNavigate} from "react-router-dom"


const TypingPage = () => {

    const navigate = useNavigate()

    const[hasTimerStarted,setTimerStatus] = useState(false)
    const[isTimerValue0,setIndicateTimerIs0] = useState(false)
    const[resetTimer,setResetTimer] = useState(false)
    const[timeLimit, setTimeLimit] = useState(40)


    useEffect(()=>{
      if(isTimerValue0 == true){     // when timer is up navigate to show the score
          navigate("/scorePage")
      }
    },[isTimerValue0])


  return (
    <div>

       <TimerSetters timerFunctions = {{setTimerStatus:setTimerStatus, setIndicateTimerIs0:setIndicateTimerIs0, resetTimer:resetTimer,setResetTimer:setResetTimer, setTimeLimit:setTimeLimit}}/>
           <br/>

       <TypingContainer  timerInformation = {
        {
          hasTimerStarted : hasTimerStarted,
          settimerStatus : setTimerStatus, 
          isTimerValue0 : isTimerValue0,
          setResetTimer : setResetTimer,
          timeLimit : timeLimit
         }
         }/>
       
    </div>
  )
}

export default TypingPage
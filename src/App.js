import React,{useState} from "react";
import TypingContainer from "./components/TypingContainer";
import TimerSetters from "./components/TimerSetters";
import "./style.css"

function App() {

  const[hasTimerStarted,setTimerStatus] = useState(false)
  const[isTimerValue0,setIndicateTimerIs0] = useState(false)
  const[resetTimer,setResetTimer] = useState(false)
  
  return (
    <div className="App">
      <h1>Typing app</h1>

      <TimerSetters timerFunctions = {{setTimerStatus:setTimerStatus, setIndicateTimerIs0:setIndicateTimerIs0, resetTimer:resetTimer,setResetTimer:setResetTimer}}/>
           <br/>

      <TypingContainer timerInformation = {{hasTimerStarted:hasTimerStarted,settimerStatus:setTimerStatus, isTimerValue0:isTimerValue0, setResetTimer:setResetTimer}}/>

    </div>
  );
}

export default App;

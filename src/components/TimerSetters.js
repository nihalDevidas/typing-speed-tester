import React,{useEffect, useState,useContext} from "react";
import Timer1 from "../components/Timer1";
import { useDispatch } from 'react-redux';
import ThemeContext from "../components/ThemeContext"


const TimerSetters = ({timerFunctions})=>{

 const{setTimerStatus, setIndicateTimerIs0, resetTimer, setResetTimer, setTimeLimit} = timerFunctions

  const[sec40, setSec40] = useState({secs : 40,start40sTimer:false});
  const[sec20, setSec20] = useState({secs : 0,start20sTimer:false});
  const[sec10, setSec10] = useState({secs : 0,start10sTimer:false});

  const {theme}  = useContext(ThemeContext)

  
  function setStates(secValue){
     switch(secValue){

      case 40: setSec40({... sec40, secs : secValue})
               setSec10({secs : 0,start10sTimer:false})
               setSec20({secs : 0,start20sTimer:false})
               setTimeLimit(40)
                break;

      case 20: setSec20({...sec20, secs: secValue})
               setSec10({secs : 0,start10sTimer:false})
               setSec40({secs : 0,start40sTimer:false})
               setTimeLimit(20)
                break;

      case 10: setSec10({...sec10, secs : secValue})
               setSec20({secs : 0,start20sTimer:false})
               setSec40({secs : 0,start40sTimer:false})
               setTimeLimit(10)
                break;
     }
  }

  function startTimerFor(){

     setTimerStatus(true)                                      //set focus on input indicator   
    
        if(sec40.secs >0){
          setSec40({... sec40, start40sTimer : true})
          setSec10({secs : 0,start10sTimer:false})
          setSec20({secs : 0,start20sTimer:false})
        }

        if(sec20.secs >0){
          setSec20({... sec20, start20sTimer : true})
          setSec10({secs : 0,start10sTimer:false})
          setSec40({secs : 0,start40sTimer:false})
      }

      if(sec10.secs >0){
        setSec10({... sec10, start10sTimer : true})
        setSec40({secs : 0,start40sTimer:false})
        setSec20({secs : 0,start20sTimer:false})
      }
    

  }


    useEffect(()=>{ 

      if(resetTimer  == true){

               setSec40({secs : 40,start40sTimer:false})     // reset all states to deafault when reset buttun is clicked
               setSec10({secs : 0,start10sTimer:false})
               setSec20({secs : 0,start20sTimer:false})

          setResetTimer(false)                              //set reset timer indicator to default 
          setTimeLimit(40)
      }

    },[resetTimer])



  return(
      <div className="timer-con">
        <div className="timer-buttons-container">
          <button className={"start-typing "+theme.btnColorClass} onClick = {startTimerFor}>Start typing</button>

          <button className={"sec-button "+theme.btnColorClass} onClick = {()=>setStates(40)} >40 sec</button>
          <button  className= {"sec-button "+theme.btnColorClass} onClick = {()=>setStates(20)}>20 sec</button>
          <button className= {"sec-button "+theme.btnColorClass} onClick = {()=>setStates(10)}>10 sec</button>
        </div>
      
        <div className="time-left">
          {sec40.secs >0 && <Timer1 seconds = {{duration : sec40.secs, begin: sec40.start40sTimer, setIndicateTimerIs0:setIndicateTimerIs0, resetTimer:resetTimer}}/>}
          {sec20.secs >0 && <Timer1 seconds = {{duration:sec20.secs, begin: sec20.start20sTimer, setIndicateTimerIs0:setIndicateTimerIs0, resetTimer:resetTimer}}/>}
          {sec10.secs >0 && <Timer1 seconds = {{duration:sec10.secs, begin: sec10.start10sTimer, setIndicateTimerIs0:setIndicateTimerIs0, resetTimer:resetTimer}}/>}
        </div>
      </div>
  )

}
export default TimerSetters;
import React,{useState,useEffect,useContext} from "react";
import ThemeContext from "../components/ThemeContext"

let timer;

const Timer1 = ({seconds})=>{     // props.seconds

  let{duration, begin, setIndicateTimerIs0, resetTimer} = seconds  

  const[time,setTime] = useState(duration ? duration:40);

  const {theme}  = useContext(ThemeContext)

  
    function startCoundown(){
        setTime((prev)=>prev-1);
    }

    useEffect(()=>{
        if(begin == true)                              // if strat is pressed then only strat the timer
        {
            timer = setInterval(startCoundown,1000);
            setIndicateTimerIs0(false)                   // when timer starts again notify that timre val is not zero

            return ()=>{                             // function will execute when comp unmounts
                clearInterval(timer);
            }
        }
    },[begin])    

    
    useEffect(()=>{                          // no dependency so this useffect will run for every re=render to chech for timer value
        if(time <= 0){
            setIndicateTimerIs0(true)            // indicate that timer value has become 0
            clearInterval(timer);
        }
    })
     

    useEffect(()=>{                             // reset the data from timer box
        if(resetTimer == true){
            setTime(40)
        }
    },[resetTimer])
 


    return(
        <div>
            <button id="sec-btn" className={"sec-button "+theme.btnColorClass}>{time} Sec</button>
        </div>
    )

}

export default Timer1;


// begin prop-dependency:
// for the very first render, prop begin will be false (since useeffect run for the first render you need to control this condition)
// so dont start the timer 
// when start is clicked begin=true but dependency was empty[] so useeefect will not run again
// by adding [begin] dependency we are starting the counter when strat typing is clicked
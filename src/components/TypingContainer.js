import React,{useState,useEffect,useRef,useContext} from 'react'
import Paragraphs from "../components/Paragraphs";
import{storeTypingResult,addScore} from "../components/redux/actions/scoreActions"
import { useDispatch } from 'react-redux';
import ThemeContext from "../components/ThemeContext"


let charIndex = 0;


const TypingContainer = ({timerInformation}) => {

 const{hasTimerStarted,settimerStatus, isTimerValue0,setResetTimer,timeLimit} = timerInformation

 const {theme}  = useContext(ThemeContext)

 const[text,setText] = useState(()=>getCharArray());  // lazy loading
 const[typedText,setTypedText] = useState("");

 const dispatch = useDispatch();
  
 
 const inputElement = useRef(null);
 let  mistakes = useRef(0)
 let cpm = useRef(0)
 let wpm = useRef(0)
 let accuracy = useRef(0)

 

 function getCharArray(){
  let selectedText = Paragraphs[Math.floor(Math.random()*Paragraphs.length)];  // get random paragraph

  let charArray = selectedText.split("").map(char=>{
    return{character:char,classValue:theme.textColorClass}
  });
  return charArray;
}


  useEffect(()=>{  
                                 
      if(hasTimerStarted == true){              //focus on input when time starts  

           inputElement.current.focus()
           settimerStatus(false);              // once timer starts reset timerstart indicator back to false(to re focus again)
         }  
  },[hasTimerStarted])                           



  useEffect(()=>{                          //when timer is zero dont allow to type

    if(isTimerValue0 == true){
      inputElement.current.value = ""
      inputElement.current.blur()

      // once the timer is zero calculate wpm cpm accuracy
      cpm.current = charIndex - mistakes.current
      
      wpm.current = Math.round(((charIndex - mistakes.current)/5)/(timeLimit/60))

      accuracy.current = Math.floor((cpm.current/charIndex)*100)
    
      
      // use dispatch method to set the store

      dispatch(storeTypingResult({mistakes: mistakes.current , cpm: cpm.current , wpm: wpm.current , accuracy: accuracy.current}))  //data obj

      // stor current wpm
      dispatch(addScore());
    }

  },[isTimerValue0])



  useEffect(()=>{
      
      if(typedText !== "") // since useEffect runs for first time check if something is typed
      {
            let typedValue = typedText.split("")[charIndex];
            
            if(typedValue == null){  // backspace handling
                  charIndex--;
               setText([...text,text[charIndex].classValue = theme.textColorClass]); 

               if(text[charIndex].classValue === "incorrect"){
                mistakes.current = mistakes.current-1
               } 
              
            }
            else{
                  if(typedValue === text[charIndex].character)
                  {
                    setText([...text,text[charIndex].classValue = "correct"]);
                  }
                else{
                  setText([...text,text[charIndex].classValue = "incorrect"]);
                   mistakes.current = mistakes.current+1
                  }
                charIndex++;  
              }
            
      }
      
  },[typedText])


  function resetEveryThing(){

        let newRandomText = getCharArray();  // fetch new data
        setText(newRandomText)

        inputElement.current.value = ""    // clear input feild
        inputElement.current.blur()

        charIndex = 0                    // very important

        setResetTimer(true)             // send a singnal to reset timer when reset is presed

  }


    return (
        <div>
           <div>
              <input className='txt-imp' ref={inputElement} type="text" onInput = {(e)=>setTypedText(e.target.value)} />
           </div>
           
           <div>
              <div id="typing-text">
                { ( text.map((obj)=><span className = {obj.classValue}>{obj.character}</span>) ) }
              </div>
           </div>

           <div className={"reset-button-container"}>
              <button className={theme.btnColorClass}  onClick = {resetEveryThing}>Reset</button>
           </div>
        </div>
    )
}

export default TypingContainer;
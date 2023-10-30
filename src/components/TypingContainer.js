import React,{useState,useEffect,useRef} from 'react'
import Paragraphs from "../components/Paragraphs";



function getCharArray(){
    let selectedText = Paragraphs[Math.floor(Math.random()*Paragraphs.length)];  // get random paragraph

    let charArray = selectedText.split("").map(char=>{
      return{character:char,classValue:"plain"}
    });
    return charArray;
}
let charIndex = 0;



const TypingContainer = ({timerInformation}) => {

 const{hasTimerStarted,settimerStatus, isTimerValue0,setResetTimer} = timerInformation
 

 const[text,setText] = useState(()=>getCharArray());  // lazy loading
 const[typedText,setTypedText] = useState("");
   
 const inputElement = useRef(null);


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
    }

  },[isTimerValue0])



  useEffect(()=>{
      
      if(typedText !== "") // since useEffect runs for first time check if something is typed
      {
            let typedValue = typedText.split("")[charIndex];
            
            if(typedValue == null){  // backspace handling
                  charIndex--;
               setText([...text,text[charIndex].classValue = "plain"]);  
              
            }
            else{
                  if(typedValue === text[charIndex].character)
                  {
                    setText([...text,text[charIndex].classValue = "correct"]);
                  }
                else{
                  setText([...text,text[charIndex].classValue = "incorrect"]);
                
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
              <input ref={inputElement} type="text" onInput = {(e)=>setTypedText(e.target.value)} />
           </div>
           
           <div>
              <div id="typing-text">
                { ( text.map((obj)=><span className = {obj.classValue}>{obj.character}</span>) ) }
              </div>
           </div>

           <div>
            <br/>
            <button onClick = {resetEveryThing}>Reset</button>
           </div>
            {isTimerValue0 && <h1>OPPs.. TimeUP reset and start again</h1>}
        </div>
    )
}

export default TypingContainer;
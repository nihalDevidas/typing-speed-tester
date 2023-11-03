import { ADD_SCORE, GET_HIGHEST_SCORE,STORE_TYPING_RESULT } from "../actions/actionTypes";

let initialState = {

    mistakes:0,
    cpm:0,
    wpm:0,
    accuracy:0,
    scores:[],
    highestScore:0
}


const scoreReducer = (state = initialState,actions)=>{
    
    switch(actions.type){

        case STORE_TYPING_RESULT : return {
                                    ...state,
                                    mistakes: actions.info.mistakes,
                                    cpm: actions.info.cpm,
                                    wpm: actions.info.wpm,
                                    accuracy:actions.info.accuracy
                                 }

        case ADD_SCORE:  return {...state,scores:[...state.scores, state.wpm]}
        
        case GET_HIGHEST_SCORE: let max =state.scores.reduce((accumulator,value)=>{
                                            if(value > accumulator){
                                                accumulator = value
                                            }
                                           return accumulator
                                          })
                                
                                return {...state,highestScore:max}  
         
         default: return state                       
    }

}

export default scoreReducer;
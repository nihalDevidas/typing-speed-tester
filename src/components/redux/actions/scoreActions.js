// defining action creator for each action 

import { ADD_SCORE, GET_HIGHEST_SCORE,STORE_TYPING_RESULT } from "./actionTypes";



export const storeTypingResult = (data)=>{
    return {
        type:STORE_TYPING_RESULT,
        info:data
    }
}

export const addScore = ()=>{
    return {
        type:ADD_SCORE
    }
}

export const getHighestScore = ()=>{
    return {
        type:GET_HIGHEST_SCORE
    }
}
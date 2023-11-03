import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
import {BlueUniverse,Darknite} from "./themes"

const ThemeProvider = (props) => {

    const[theme,setTheme] = useState(BlueUniverse)

  return (
    <ThemeContext.Provider value={
        {
            theme:theme,
            BlueUniverse:()=>{setTheme(BlueUniverse)},
            Darknite:()=>{setTheme(Darknite)},
            HulkVerse: ()=>{setTheme("HulkVerse")}
        }

    }>
       {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
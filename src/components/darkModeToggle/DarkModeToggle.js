import React, { useEffect, useState } from 'react'
import Toggle from '../toggle/Toggle';
export const DarkModeToggle =({}) => {
    const [theme , setThemeActive ] = useState( localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    const root = document.documentElement;
   
   
    useEffect(()=>{
      if(!localStorage.getItem('theme') || (theme != 'light' && theme != 'dark')){
        localStorage.setItem('theme', 'light');
        root.classList.remove('dark');
      }else{
        if (localStorage.getItem('theme')  === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    },[theme]);

    const setTheme = ()=>{
      
      let mode = theme === 'light'?'dark': 'light';
      localStorage.setItem('theme', mode );
      setThemeActive(mode);
    }
  return (
    <>
      <Toggle theme={theme} setTheme={setTheme}/>
    </>
  )
}

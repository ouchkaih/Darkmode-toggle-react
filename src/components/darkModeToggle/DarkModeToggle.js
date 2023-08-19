import React, { useEffect} from 'react'
import Toggle from '../toggle/Toggle';
export const DarkModeToggle =({theme = 'light' , setThemeActive }) => {
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

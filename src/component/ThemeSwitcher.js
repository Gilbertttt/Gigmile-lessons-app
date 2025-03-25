import React, { useEffect } from 'react'
import { useState } from 'react'

  //bg-white and text-black
    //light is the initial value, while the second value is a function that allows you to update that current state 

     //bg-gray-900 and text-white

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleButtonMode () {
    const newTheme = theme === "light" ? "dark": "light";
    setTheme(newTheme);
  }
  useEffect(() =>{
 if(theme === 'dark') {
    document.body.classList.add("bg-gray-900", "text-white");
    document.body.classList.remove("bg-white-100", "text-black");
  } else{
    document.body.classList.add("bg-white-900", "text-black");
    document.body.classList.remove("bg-black-100", "text-white");
  }
  console.log(localStorage.setItem("theme", theme))
    
  }, [theme])
    
  
 return (
    <div>
      <button onClick={toggleButtonMode}
      className='px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600'
      >Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>
    </div>
  )
}

export default ThemeSwitcher


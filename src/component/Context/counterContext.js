import React, { createContext } from 'react'
import { useContext, useState } from 'react'


  const CounterContext = createContext ({
    count: 0,
    setCount: () => {},
  })

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
      <CounterContext.Provider value={{count, setCount}}>
       <div> 
        {children}
        </div>
      </CounterContext.Provider>
       
    
        
    )
}




export {CounterContext, CounterProvider}


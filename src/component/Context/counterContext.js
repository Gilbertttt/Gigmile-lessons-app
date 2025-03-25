import React, { createContext } from 'react'
import { useContext, useState } from 'react'


const counterContext = ({children}) => {
    const [count, setCount] = useState(count);
    const counterContext = createContext();

    return (
        <counterContext.Provider value={count, setCount}>
        <div>
        <h1>count {count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}></button>
        </div>
        </counterContext.Provider>
        
    )
}




export default counterContext 


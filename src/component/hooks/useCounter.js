//Custom hooks 

import React from 'react'
import { useState, useEffect } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(() => {
        return parseInt(localStorage.getItem("count")) || 0;
    });

    function increment () {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
             setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0 ));
    }
    function resetting() {
        setCount(0)
    }  
    
    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count]) 
  return { count, increment, decrement, resetting };
};

export default useCounter

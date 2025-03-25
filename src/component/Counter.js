import React, { useEffect, useState } from 'react'
import useCounter from './hooks/useCounter'

const Counter = () => {
    const { count, increment, decrement, resetting } = useCounter();
   
    console.log (count)
  return (
    <div className='p-4 text-center'> 
    <h1 className='text-2xl font-bold text-green-500'>The value of the digit is {count}</h1>
    
    <button onClick={increment} className='px-4 py-2 bg-blue-500 text-white rounded mr-2'>+</button>
    <button onClick={decrement} className='px-4 py-2 bg-red-500 text-white rounded mr-2'>-</button>
    <button onClick={resetting} className='px-4 py-2 bg-gray-500 text-white rounded'>0</button>
   
    
    </div>
    
  )
}

export default Counter

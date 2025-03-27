import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './component/Context/CounterContext'

const GrandChildContext = () => {
    const { count, setCount } = useContext(CounterContext)
  return (
    <div>
    <h3> Count is {count}</h3>
    <button onClick={() => setCount(count + 1)}></button>
      
    </div>
  )
}

export default GrandChildContext

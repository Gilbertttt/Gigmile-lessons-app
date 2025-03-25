import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'


const Todolist = () => {
  const [itemData, setItemData] = useState('') // For the input field
  const [task, setTask] = useState(
    localStorage.getItem('task') || []) // This state holds the lists of all the tasks (an array)
    
   
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if(itemData.trim() !== '') {
        setTask([...task, itemData]) // Combines existing tasks(copied by the spread operator) with the new taks (task) and sets it to the new array

        setItemData(''); // Clears the input field after adding task
      }
    }
  
 useEffect(()=> {
localStorage.setItem('tasks', JSON.stringify(task)) }, [task]
);

  
 

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Enter Tasks
     <input 
     type='text'
     value={itemData}
     onChange={(e) => setItemData(e.target.value)}
       placeholder='Enter Task'
       className=' p-4 m-4 w-96 border-box rounded font-bold bg-gray-500 text-white '>
       </input>
    </label>
     
       <div>
       <button className='p-4 m-4 border-box rounded bg-sky-500 text-white hover:bg-red-500'>Add Task</button>
      
       
       <button className='p-4 m-4 border-box rounded bg-sky-500 text-white hover:bg-red-500'>Save Task</button>
       <span> Marked as Complete <input type='checkbox'>
       </input></span>
       </div>
       </form>
       <TodoItem task={task} setTask={setTask}/>
    </div>
  )
}

export default Todolist

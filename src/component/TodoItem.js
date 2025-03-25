import React, { useState } from 'react';

const TodoItem = ({ task, setTask }) => {
  const[editedTask, setEditedTask] = useState(null); // For the edited task
  const[editTaskIndex, setEditTaskIndex] = useState(''); // For the index of the edited task

  // Function to edit task
  function editTask (index) {
    setEditedTask(task[index]) // saves the tasks being edited
     setEditTaskIndex(index) // Saves the index of the task being edited
     
  }

  //Function to save task
  function saveTask (index) {
    const updatedTask = [...task] //Access the new array and save it in the new updatedtask
    updatedTask[index] = editedTask ;
     setTask(updatedTask)
     setEditTaskIndex(null)
  }

  function deleteTask ({index}) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className='bg-gray-300 mt-10'>
      <h3 
      className='text-center italic font-bold'>
      List of tasks</h3>

      {task.length > 0 ? (
        task.map((task, index) => (
          <div className='flex mb-2 p-2'>
          
           if(editTaskIndex === index) {
            <input 
            type='text'
            value={editTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className='bg-blue-100 w-64 h-12 p-3 mr-2'>
            </input>
           }
          <p 
          className='w-64 h-10 bg-white p-2'
          key={index}>
          Task {index + 1}: {task}
          </p>

          if (editTaskIndex === index) {
            <button onClick={() => saveTask(index)}  
            className='p-2 m-2 border-box rounded bg-green-500 text-white hover:bg-green-600'> Save</button>
          }

          <button onClick={() => editTask(index)}
          className='bg-sky-500 w-32 h-10 border-box rounded ml-10 mr-10 text-center hover:bg-red-500'
          >Edit task
          </button>

          <button onClick={() => deleteTask(index)}
          className='bg-sky-500 w-32 h-10 border-box rounded hover:bg-red-500'
          >Delete task
          </button>

          </div>
        ))
      ) : (
        <p>No tasks available</p>
      )}
      
    </div>
  );
};

export default TodoItem;
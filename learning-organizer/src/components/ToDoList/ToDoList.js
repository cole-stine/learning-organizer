import React from 'react'
import { useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css'

function ToDoList() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([]);

  function addTask(newTaskText) {
    if (text !== '') {
      const newTask = {
          id: Date.now(),
          text: newTaskText,
          complete: false
        };
      setTasks([...tasks, newTask]);
      setText("");
    }
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {...task, complete: !task.complete};
      } else {
        return task;
      }
    }));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {...task, editing: !task.editing};
      } else {
        return task;
      }
    }));
  }
  
  function clearAllTasks() {
    setTasks([]);
  }

  return(
    <div className={styles.todoList}>
      <h1>LEARNING GOALS</h1>
      <div className={styles.inputContainer}>
        <button onClick={() => {addTask(text)}}>Add Task</button>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Task to be completed..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask(text);
            }
          }}
        />
        <button className={styles.clearAll} onClick={() => {clearAllTasks()}}>Clear All</button>
      </div>
      { (tasks.length !== 0) &&
        <div className={styles.todoItemList}>
          {tasks.map(task => {
            return <ToDoItem task={task} deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted}/>
          })}
        </div>
      }
    </div>
  )
}

export default ToDoList
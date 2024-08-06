import React from 'react'
import styles from './ToDoItem.module.css';
import editIcon from '../../assets/edit-icon.svg'
import deleteIcon from '../../assets/delete-icon.svg'
import doneIcon from '../../assets/done-icon.svg'

function ToDoItem({ task, deleteTask, editTask, toggleCompleted }) {

    return (
        <div className={styles.todoItemContainer}>
            <input
                type="checkbox"
                checked={task.complete}
                onChange={() => toggleCompleted(task.id)}
            />
            <label className={styles.labelStyle} contentEditable={task.editing}>{task.text}</label>
            { !task.editing &&
                <div className={styles.iconDiv}>
                    <img src={editIcon} alt='Edit icon' title='Edit' onClick={() => editTask(task.id)}/>
                    <img src={deleteIcon} alt='Delete icon' onClick={() => deleteTask(task.id)}/>
                </div>
            }
            { task.editing &&
                <div className={styles.iconDiv}>
                <img src={doneIcon} alt='Done icon' onClick={() => editTask(task.id)}/>
                <img src={deleteIcon} alt='Delete icon' onClick={() => deleteTask(task.id)}/>
            </div>
            }
        </div>
    )
}

export default ToDoItem
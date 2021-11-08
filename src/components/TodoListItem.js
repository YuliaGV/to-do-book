import React from 'react'
import { MdOutlineCheck} from "react-icons/md";
import { MdOutlineClose} from "react-icons/md";

const TodoListItem = ({todo, handleDelete, handleToggle}) => {
    return (
        <>
            
            <li 
                className={`list-group-item ${todo.completed && 'completed'}`}
                key={todo.id}
                >
                <button 
                        className={`btn checkBtn ${todo.completed && 'completedBtn'}`}
                        onClick={() => handleToggle(todo.id)}
                    >
                        <MdOutlineCheck /> 
                </button>
                <p 
                className="text-todo"
                onClick={() => handleToggle(todo.id)}
                >
                    {todo.description}
                </p>
                <div className = "actions">
                    <button 
                        className= "btn deleteBtn"
                        onClick={() => handleDelete(todo.id)}
                    >
                        <MdOutlineClose />
                    </button>
                </div>
            </li>

            
        </>
    )
}

export default TodoListItem

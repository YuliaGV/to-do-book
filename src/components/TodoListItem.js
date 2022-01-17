import React, {useState } from 'react'
import { MdOutlineCheck} from "react-icons/md";
import { MdOutlineClose} from "react-icons/md";
import {MdModeEdit} from "react-icons/md";
import { EditTodo } from './EditTodo';


const TodoListItem = ({todo, handleDelete,handleEdit, handleToggle}) => {

    const [show , setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

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
                        className="btn editBtn"
                        onClick={handleShow}
                    >
                        <MdModeEdit />
                    </button>
                    <button 
                        className= "btn deleteBtn"
                        onClick={() => handleDelete(todo.id)}
                    >
                        <MdOutlineClose />
                    </button>

                </div>
            </li>
            {show && <EditTodo todo={todo} handleEdit={handleEdit} setShow={setShow} />}
            
        </>
    )
}

export default TodoListItem

import React, {useReducer, useEffect } from 'react'
import {TodoReducer} from '../reducers/TodoReducer'

import TodoList from './TodoList'


import './TodoApp.css'
import Logo from '../img/logoApp.png'
import TodoAdd from './TodoAdd'


//Traer los datos de localStorage o inicializar un array vacío
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


// Inicio del componente

const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer, [], init);


    //Delete 

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    //Marcar ToDo como completado

    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);

    }

    const handleAddTodo = (newTodo) => {

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action) 
    
    }


    const handleClearAll = () => {

        const action = {
            type: 'clearall'
        }

        dispatch(action)
    }

    const handleClearCompleted = () => {

        const action = {
            type: 'clearcompleted'
        }

        dispatch(action)

    }

    //Grabar cuando cambia la lista de todos

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); 
    

    return (

        <div className="container mt-5 text-center">

            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>

            

            <div className="row">

                <div className="col-md-6">

                    <TodoAdd 
                        handleAddTodo={handleAddTodo}  
                    />
            
                </div>

                <div className="col-md-6">
                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                    <div className="row mt-2">
                        <div className="col-md-6">
                            <button 
                            className="btn optionBtn"
                            onClick={handleClearCompleted}
                            >
                            Borrar completados
                            </button> 
                        </div> 
                        <div className="col-md-6">
                            <button 
                            className="btn optionBtn"
                            onClick={handleClearAll}
                            >
                            Borrar la lista
                            </button>
                        </div>
                    </div>
  
                </div>
                      

            </div>
            
        </div>
    )
}

export default TodoApp; 

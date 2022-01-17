import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = ({todos, handleDelete, handleEdit, handleToggle}) => {


    return (
        <>

            <ul className="list-group mt-5">
                {todos.map(todo => (
                    <TodoListItem  
                        key={todo.id}
                        todo={todo}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                    />
                    
                ))}
             </ul>


            
        </>
    )
}

export default TodoList

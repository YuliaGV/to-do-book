import React from 'react'
import { useForm } from '../hooks/useForm'

import imagenEscribe from '../img/imagenEscribiendo.png'

const TodoAdd = ({handleAddTodo}) => {

    //Usando el custom hook para el formulario, useForm se desestructura el array que devuelve

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    //Submit

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        //Nuevo todo, el id y el completed vienen por defecto, description viene del input 
        const newTodo  = {
            id: new Date().getTime(),
            description: description,
            completed: false
        };

        handleAddTodo(newTodo);
        reset();
    }


    return (

        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">¿Qué quieres hacer?</h5>

                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <input 
                            type="text" 
                            name = "description"
                            className="form-control" 
                            placeholder="Escribe aquí..."
                            onChange={handleInputChange}
                            value={description}
                        />
                                
                    </div>
                    <button 
                        type="submit" 
                        className="btn mt-2 btn-agregar"

                    >
                        Agregar
                    </button>
                </form>
                <div className="imagen-escribiendo mt-5">
                    <img src={imagenEscribe} width = "300px" alt="imagen escribiendo"/>
                </div>
            </div>
                        
        </div>
        
    )
}

export default TodoAdd

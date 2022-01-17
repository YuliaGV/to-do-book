import React, {useState } from 'react'

export const EditTodo = ({todo, handleEdit, setShow}) => {

    const [description, setDescription] = useState(todo.description);

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (description.trim().length <= 1) {
            return;
        }
        handleEdit(todo.id, description);
        setShow(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mt-2"
                    value={description}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="btn mt-2 btn-agregar"
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}

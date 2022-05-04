import React from 'react'
import './todos.css'
import Button from 'react-bootstrap/Button';

const Todo = ({ id,title,onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{title}</span>
            <span >
                <Button variant="secondary" className='button'>Editar</Button>
                <Button variant="danger" onClick={handleDelete}>Deletar</Button>
            </span>
        </div>
    )
}

export default Todo

import React from 'react'
import './user.css'
import Button from 'react-bootstrap/Button';

const User = ({ id,email,name,onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span >
                <Button variant="secondary" className='button'>Editar</Button>
                <Button variant="danger" onClick={handleDelete}>Deletar</Button>
            </span>
        </div>
    )
}

export default User

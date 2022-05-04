import React from 'react'
import './user.css'

const User = ({ id,email,name,onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button>Editar</button>
                <button onClick={handleDelete}>Deletar</button>
            </span>
        </div>
    )
}

export default User

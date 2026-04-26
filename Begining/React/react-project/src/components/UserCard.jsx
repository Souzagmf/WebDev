import { useState } from 'react'
import './UserCard.css'

function UserCard({ user, onDelete }) {

    return (
        <div className="user-card">
            <img className='user-card-avatar' src={`https://robohash.org/${user.id}`} />
            <div className="user-card-info">
                <p><span>Nome:</span> {user.name}</p>
                <p><span>Email:</span> {user.email}</p>
                <p><span>Idade:</span> {user.age}</p>
            </div>
            <div className='eraseBtn'>
                <button onClick={() => {onDelete(user.id)}}>Delete</button>
            </div>
        </div>
    )
}

export default UserCard
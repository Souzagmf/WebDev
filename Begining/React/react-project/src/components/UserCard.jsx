import './UserCard.css'

function UserCard({user}) {
    return (
        <div className="user-card">
            <img className='user-card-avatar' src={`https://robohash.org/${user.id}`} />
            <div className="user-card-info">
                <p><span>Nome:</span> {user.name}</p>
                <p><span>Email:</span> {user.email}</p>
                <p><span>Idade:</span> {user.age}</p>
            </div>
        </div>
    )
}

export default UserCard
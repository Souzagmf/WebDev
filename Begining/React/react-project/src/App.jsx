import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [name, setName] = useState("Gabriel")
  const [email, setEmail] = useState("gael@mail.com")
  const [age, setAge] = useState("27")
  const [users, setUsers] = useState([])
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  }

  function HandleSubmit(event) {
    event.preventDefault()

    const newUser = { id: Date.now(), name, email, age }

    setUsers([...users, newUser])
  }

  
  return (
    <div className="app">
      <h1 className='title'>Cadastro de usuários</h1>

      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Nome' value={name} onChange={(event) => setName(event.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
        <input type="number" placeholder='Idade' value={age} onChange={event => setAge(event.target.value)} />
        <button type='submit'>Cadastrar</button>
      </form>
      <div className="user-list">
        <h1 className='title'>Usuários Cadastrados</h1>
        <div>{users.map((user) => (
          <UserCard key={user.id} user={user}  onDelete = {deleteUser}/>
        ))}</div>
      </div>
    </div>
  )
}

export default App

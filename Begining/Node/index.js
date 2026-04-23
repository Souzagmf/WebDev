const express = require("express")

const app = express()
app.use(express.json())

const port = 3000 //connection port

const users = [{
    name: 'Gabriel',
    age: '27'
}]

app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    const newUser = req.body
    
    console.log(newUser)

    users.push(newUser) //cria o usuario
    res.status(201).json(newUser)
})

app.delete('/user/:id', (req, res) => {
    const id = req.params.id

    users.splice(id,1) //deleta o usuario
    res.send("Usuario deletado")
})

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})
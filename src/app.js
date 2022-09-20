import express from 'express'

const app = express()

app.use(express.json())

const users = []
let id = 1

app.post('/users', (request, response) => {
    const user = request.body
    user.id = id
    users.push(user)
    id++
    return response.status(201).json(user)
})

app.get('/users', (request, response) => {

    const age = request.query.age
    
    if(!age){
        return response.json(users)
    }

    const user = users.filter(user => user.age == age)
    
    return response.json(user)
})

app.get('/users/:id', (request, response) => {
    const id = request.params.id
    const user = users.find(user => user.id == id)

    if(!user){
        return response.status(404).json({
            message: 'User not found'
        })
    }

    return response.json(user)
})

app.listen(3000, () => {
    console.log('Listen in port 3000')
})
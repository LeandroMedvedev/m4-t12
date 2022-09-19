import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    return response.json([
        {
            nome: "FaaaaaaaaaaaBIO"
        },
        {
            nome: "Maykel"
        },
        {
            nome: "Gustavo"
        }
    ])
})

app.listen(3000, () => {
    console.log('Listen in port 3000')
})
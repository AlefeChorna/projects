const http = require('http')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Word with Express')
})

// Request: http://localhost:3000/name/Alefe
// Response: Welcome Alefe
app.get('/name/:name', (req, res) => {
    return res.send(`Welcone ${req.params.name}`)
})

// Request: http://localhost:3000/age?age=20
// Response: Your are 20 years old
app.get('/age', (req, res) => {
    return res.send(`Your are ${req.query.age} years old`)
})

// Request: http://localhost:3000/users
// Response: [{"name":"John","age":21},{"name":"Alice","age":20}]
app.get('/users', (req, res) => {
    return res.json([
        {
            name: 'John',
            age: 21
        }, {
            name: 'Alice',
            age: 20
        }
    ])
})

app.listen(3000)
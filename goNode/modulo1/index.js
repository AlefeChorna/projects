const http = require('http')
const express = require('express')

const app = express()

const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    )

    req.appName = 'Module1'  

    next()
}

// All routes used this middleware
app.use(logMiddleware)

app.get('/', (req, res) => {
    res.send(`Welcome. The name this app is ${req.appName}`)
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
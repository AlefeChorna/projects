const http = require('http')
const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
})

// Sets the extensions for nunjucks files to be "njk"
app.set('view engine', 'njk')

const users = ["John", "Harvey", "Mike"]

// Users listing
app.get('/', (req, res) => {
    res.render(`list`, { users })
})

// Create new user
app.get('/new', (req, res) => {
    return res.render('new')
})

app.listen(3000)
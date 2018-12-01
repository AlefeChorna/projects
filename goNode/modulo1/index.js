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

app.get('/', (req, res) => {
    res.render(`list`, { name: 'Aléfe' })
})

app.listen(3000)
const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))

// Sets the extensions for nunjucks files to be "njk"
app.set('view engine', 'njk')

const users = ['John', 'Harvey', 'Mike']

// Users listing
app.get('/', (req, res) => {
  res.render(`list`, { users })
})

// Create view new user
app.get('/new', (req, res) => {
  return res.render('new')
})

// Create new User
app.post('/create', (req, res) => {
  users.push(req.body.name)

  res.redirect('/')
})

app.listen(3000)

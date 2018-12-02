const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

app.use(express.urlencoded({ extended: false }))

const verifyAgeMiddleware = (req, res, next) => {
  return req.body.age ? next() : res.redirect('/')
}

app.get('/', (req, res) => {
  return res.render('age')
})

app.post('/check', verifyAgeMiddleware, (req, res) => {
  const { age } = req.body

  return age < 18
    ? res.redirect(`/minor?age=${age}`)
    : res.redirect(`/major?age=${age}`)
})

app.get('/major', (req, res) => {
  return res.render('major', { age: req.query.age })
})

app.get('/minor', (req, res) => {
  return res.render('minor', { age: req.query.age })
})

app.listen(3000)

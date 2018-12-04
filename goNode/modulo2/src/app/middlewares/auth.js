module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // O 'objeto res.locals.user' fica visivel para todos
    // os objetos da view
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}

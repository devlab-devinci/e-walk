const jwt = require('jsonwebtoken')
const config = require('@config')
const controller = {}

controller.login = User => (req, res) => {
  User.findOne({ username: req.body.username }, (error, user) => {
    //if (error) throw error
    if (!user) res.json({ success: false, message: 'Authentification failed: user not found' })
    else {
      user.comparePassword(req.body.password, (error, matches) => {
        if (matches && !error) {
          const token = jwt.sign({ user }, config.secret)

          user.token = token
          user.save(error => {
            if (error) res.json({ success: false, message: error })
          })
          res.json({ success: true, message: 'Token granted', token, user: user })
        } else {
          res.json({ success: false, message: 'Authentification failed: wrong password' })
        }
      })
    }
  })
}

controller.verify = headers => {
  // if (headers && headers.authorization) {
  //   const split = headers.authorization.split(' ')

  //   if (split.length === 2) return split[1]
  //   else return null
  // } else return null
}

controller.isLogin = User => (req, res) => {
  User.findOne({ token: req.body.token }, (error, user) => {
    if (error || !user ) res.json({ success: false, message: 'Authentification failed' })
    else res.json({ success: true, message: 'Token is correct' })
  })
}

module.exports = controller
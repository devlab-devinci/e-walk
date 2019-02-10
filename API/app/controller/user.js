const controller = {}

controller.signup = (User) => (req, res) => {
  //res.json(req.body)
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  if (!username || !password || !email) res.json({ success: false, message: 'Please, pass a username, email and password.' })
  else {
    const newUser = new User({
      username: username,
      password: password,
      email: email
    })

    newUser.save(error => {
      //if (error) res.status(400).json({ success: false, message: 'Username already exists.' })
      if (error) res.json({ success: false, message: error })

      res.json({ success: true, message: 'Account created successfully.' })
    })
  }
}

module.exports = controller


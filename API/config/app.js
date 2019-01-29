const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const consign = require('consign')
const cors = require('cors')
const passport = require('passport')
const config = require('./index.js')

require('./passport')(passport)
require('./database')(mongoose, config)

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(passport.initialize())

app.set('ewalksecret', config.secret)
consign({ cwd: 'app' })
      .include('setup')
      .then('controller')
      .then('routes')
      .into(app)

module.exports = app
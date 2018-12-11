'use strict'

var express = require('express')
var userRoutes = express.Router()

var User = require('./User')

// get all users in the db

userRoutes.route('/all').get(function (req, res, next) {
  User.find(function (err, users) {
    if (err) {
      return next(new Error(err))
    }

    res.json(users) // return all users
  })
})

// create a user item
userRoutes.route('/add').post(function (req, res) {
  User.create(
    {
      name: req.body.name,
      done: false
    },
    function (error, user) {
      if (error) {
        res.status(400).send('Unable to create user list')
      }
      res.status(200).json(user)
    }
  )
})

// delete a user item

userRoutes.route('/delete/:id').get(function (req, res, next) {
  var id = req.params.id
  User.findByIdAndRemove(id, function (err, user) {
    if (err) {
      return next(new Error('User was not found'))
    }
    res.json('Successfully removed')
  })
})

// perform update on user item

userRoutes.route('/update/:id').post(function (req, res, next) {
  var id = req.params.id
  User.findById(id, function (error, user) {
    if (error) {
      return next(new Error('User was not found'))
    } else {
      user.name = req.body.name
      user.done = req.body.done

      user.save({
        function (error, user) {
          if (error) {
            res.status(400).send('Unable to update user')
          } else {
            res.status(200).json(user)
          }
        }
      })
    }
  })
})

module.exports = userRoutes

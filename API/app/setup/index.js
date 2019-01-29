const mongoose = require('mongoose'),
      UserModel = require('@ApiModels/User');

const models = {
  User: mongoose.model('User')
}

module.exports = models;
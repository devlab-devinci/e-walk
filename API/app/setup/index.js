const mongoose = require('mongoose'),
      UserModel = require('@ApiModels/User'),
      ImageTestingModel = require('@ApiModels/ImageTesting');

const models = {
  User: mongoose.model('User'),
  ImageTesting: mongoose.model('ImageTesting')
}

module.exports = models;
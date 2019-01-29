const models = require('@ApiRoot/app/setup')

module.exports = app => {
  const controller = app.controller.user

  app.route('/api/v1/signup').post(controller.signup(models.User))
}
const models = require('@ApiRoot/app/setup')

module.exports = app => {
  const controller = app.controller.auth

  app.route('/').get((req, res) => res.send('Ewalk API'))
  app.route('/api/v1/auth').post(controller.login(models.User))
  app.route('/api/v1/isauth').post(controller.isLogin(models.User))
}
const models = require('@ApiRoot/app/setup')

module.exports = app => {
  const controller = app.controller.imageTesting

  app.route('/api/v1/imagetesting').post(controller.getFiveLastImageTesting(models.ImageTesting))
  app.route('/api/v1/imagetesting/new').post(controller.new(models.ImageTesting))
}
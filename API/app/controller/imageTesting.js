const controller = {}
const config = require('@config')

controller.getFiveLastImageTesting = (ImageTesting) => (req, res) => {
  ImageTesting.find({}, function(err, images) {
    if (err) throw err;
    res.json({ success: true, message: images })
  });
}

controller.new = (ImageTesting) => (req, res) => {

  ImageTesting.findOne({ imageUrl: req.body.imageUrl }, (error, Image) => {
    if(Image == null) {
      Image = ImageTesting({
        imageName: req.body.imageName,
        imageUrl: req.body.imageUrl,
        jeune_femme: (1 - (Math.random() * 1)).toFixed(3),
        jeune_homme: (1 - (Math.random() * 1)).toFixed(3),
        mature_homme: (1 - (Math.random() * 1)).toFixed(3),
        other: (1 - (Math.random() * 1)).toFixed(3)
      });
    
      Image.save(function(err) {
        if (err) throw err;
      });
    }
    res.json({success: true, message: Image})
  })
}

module.exports = controller
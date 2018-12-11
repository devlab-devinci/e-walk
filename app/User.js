var mongoose = require('mongoose')

// Define collection and schema for user item

var user = new mongoose.Schema({
	name: {
		type: String
  	},
  	verify: {
    	type: Boolean
  	}
},
  	{
    	collection: 'users'
  	}
)

module.exports = mongoose.model('User', user)
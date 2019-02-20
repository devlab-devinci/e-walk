const 	mongoose = require('mongoose');

// Define collection and schema for user item

const Schema = mongoose.Schema({
	imageUrl: {
		type: String,
		unique: true
	},
	imageName: {
		type: String,
		required: true
	},
	jeune_femme: {
		type: String
	},
	jeune_homme: {
		type: String
	},//(1 - (Math.random() * 1)).toFixed(3),
	mature_homme: {
		type: String
	},//(Math.random() * 1).toFixed(3),
	other: {
		type: String
	}
});

// Schema.pre('save', function (next) {
// 	const user = this;

// 	return next();
// });

module.exports = mongoose.model('ImageTesting', Schema)
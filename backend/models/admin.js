var mongoose = require('mongoose');

module.exports = mongoose.model('admins', {	
	account: String,
	password: String,
	name: String,	
	avatarUrl: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});
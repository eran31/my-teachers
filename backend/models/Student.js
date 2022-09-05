const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
grade: {
	type: Number
},
password:{
	type: String,
},
phone:{
	type: String, 
}
}, {
	collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)

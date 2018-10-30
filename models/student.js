const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new mongoose.Schema({
  firstName: {type:String, trim:true, default:''},
  lastName: {type:String, trim:true, default:''},
  grade: {type:String, trim:true, default:''},
  school: [{type: Schema.Types.ObjectId, ref: 'School'}],
})

module.exports = mongoose.model('Student', Student);
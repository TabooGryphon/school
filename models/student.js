const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
  firstName: {type:String, trim:true, default:''},
  lastName: {type:String, trim:true, default:''},
  grade: {type:String, trim:true, default:''},
  school: [{type: Schema.Types.ObjectId, ref: 'School'}],
  age: {type:Number, trim:true, default:''},
  phone: {type:String, trim:true, default:''}
})

// Virtual for Student's full name
Student
.virtual('fullName')
.get(function (){
  return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('Student', Student);
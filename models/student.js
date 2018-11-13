const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const School = '/school'

const Student = new Schema({
  firstName: {type:String, trim:true, default:''},
  lastName: {type:String, trim:true, default:''},
  grade: {type:String, trim:true, default:''},
  school: {type: Schema.Types.ObjectId, ref: 'School'},
  age: {type:Number, trim:true, default:''},
  phone: {type:String, trim:true, default:''}
})

// Virtual for Student's full name
Student
.virtual('fullName')
.get(function (){
  return this.firstName + ' ' + this.lastName;
});

Student
.virtual('properName')
.get(function (){
  return this.lastName + ', ' + this.firstName;
});

// Virtual for Student's url
Student
.virtual('url')
.get(function (){
  return '/students/' + this._id;
});

// Virtual for Student's update url
Student
.virtual('urlUpdate')
.get(function (){
  return '/students/' + this._id + '/update';
});

// Virtual for Student's delete url
Student
.virtual('urlDelete')
.get(function (){
  return '/students/' + this._id + '/delete';
});


module.exports = mongoose.model('Student', Student);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const School = new Schema({
  name: {type:String, trim:true, default:''},
  city: {type:String, trim:true, default:''},
  state: {type:String, trim:true, default:''},
  address: {type:String, trim:true, default:''},
  phone: {type:String, trim:true, default:''}
})

// Virtual for School's location
School
.virtual('location')
.get(function (){
  return this.city+ ', ' + this.state;
});

// Virtual for School's url
School
.virtual('url')
.get(function (){
  return '/schools/' + this._id;
});

// Virtual for School's update url
School
.virtual('urlUpdate')
.get(function (){
  return '/schools/' + this._id + '/update';
});

// Virtual for School's delete url
School
.virtual('urlDelete')
.get(function (){
  return '/schools/' + this._id + '/delete';
});

module.exports = mongoose.model('School', School);
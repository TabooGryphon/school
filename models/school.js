const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const School = new Schema({
  name: {type:String, trim:true, default:''},
  city: {type:String, trim:true, default:''},
  state: {type:String, trim:true, default:''},
  address: {type:String, trim:true, default:''},
  phone: {type:String, trim:true, default:''}
})

module.exports = mongoose.model('School', School);
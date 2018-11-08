const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var async = require('async');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

// Main Page
exports.main = function(req, res, next) {
  var header = 'Welcome'

  res.render('index', {title: header})
}
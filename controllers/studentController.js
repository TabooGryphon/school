const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var async = require('async');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

exports.student_form = function(req, res, next){
var count_students;

  Student.countDocuments({}, function (err, cs){
    count_students = cs;
  });
   
  Student.find({})
  .populate('school', 'name')
  .exec( function(err, list_students) {
    if (err){
      return next(err);
    };
    var ryan = list_students[0];
    res.render('index', {title: 'Student List', format: 'form', count: count_students , students: list_students});
  });
}
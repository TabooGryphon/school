const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var async = require('async');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

<<<<<<< HEAD
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
=======
exports.student_list = function(req, res) {

async.parallel({
    students: function(callback) {
        Student.find()
        .sort('lastName')
        .exec(callback)
    },
    schools: function(callback) {
        School.find()
        .exec(callback)
    }
},
    function(err, results) {
        if (err) {return err.message}
    res.render('index', {students: results.students, titel:'Student List'})
    });
}

exports.student_help = function(req, res) {
    
var student: function(){
    Student.find()
    .sort('lastName')
    .exec()
    res.render('index', {students: student, help: student})
    }
>>>>>>> 0c68a0795c99fbe73f7b3fe395276f67618124c2
}
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

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
}
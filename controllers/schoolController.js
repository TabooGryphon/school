const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Student = require('../models/student');
const School = require('../models/school');
const async = require('async');

exports.student = function(req, res, next){
    Student.find()
    .sort({lastName: 'asc'})
    .exec(function (err, list_students) {
        if(err){
            return next(err);
        } else {
            mustache.render('student_list', {})
        }
    })
}
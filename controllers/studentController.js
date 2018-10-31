const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

exports.student_form = function(req, res) {
const form_title = 'Student Input Form'
    res.render('student_form', {title: form_title})
}
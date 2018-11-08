const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Student = require('../models/student');
const School = require('../models/school');
const async = require('async');

exports.schools = function(req, res, next){
    School.find()
    .sort('name asc')
}
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

exports.ryan = function(req, res) {
    const form_title = 'Ryan'
    res.render('ryan', {title: form_title})
}

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Student = require('../models/student');
var async = require('async');
var School = require('../models/school');

exports.index = function(req, res) {
    const form_title = 'Forms'
    res.render('index', {title: form_title})
}

exports.forms_update_get = function (req, res) {

    
}
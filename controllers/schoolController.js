const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Student = require('../models/student');
const School = require('../models/school');
const async = require('async');

exports.schools_list = function(req, res, next){

    School.find({})
    .sort({name: 'asc'})
    .exec( function(err, list_schools) {
        if(err){
            return next(err)
        }
        res.render('school_list', {title:'Schools', school: list_schools})
    })
}

exports.school_detail = function (req, res, next){

    School.findById(req.params.id)
    .exec(function(err, detail_school){
        if (err){
            return next(err)
        }
    res.render('school_detail', {title: detail_school.name, school: detail_school})
    })
}
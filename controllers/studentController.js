const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Student = require('../models/student');
const async = require('async');
const School = require('../models/school');

exports.student= function(req, res, next){
    let header = 'Students';
    res.render('index', {title: header});
}

exports.student_list = function(req, res, next) {
    Student.find({})
    .sort({lastName: 'asc'})
    .populate('school')
    .exec(function (err, list_students) {
        if (err){
            return next(err);
        };
        res.render('student_list', {title:'Students', student: list_students})
    })
}

exports.student_detail = function(req, res, next){

    Student.findById(req.params.id)
    .populate('school')
    .exec(function (err, detail_student){
        if (err){
            return next(err)
        }
    res.render('student_detail', {title: detail_student.properName, student: detail_student})
    })
}

exports.student_update_get = function(req, res, next){

		var school_list;

		School.find({})
		.exec(function(err, schools){
			if(err){
				return next(err)
			}
			school_list = schools;
		})

    Student.findById(req.params.id)
    .populate('school')
    .exec(function (err, update_student){
        if (err){
            return next(err)
        }
		res.render('student_update', {title: update_student.properName, student: update_student, schools: school_list})
    })
}

exports.student_update_post = [

	// Validate fields.
	body('firstName', 'First name must not be empty.').isLength({ min: 1 }).trim(),
	body('lastName', 'Last name must not be empty.').isLength({ min: 1 }).trim(),
	body('grade', 'Grade must not be empty.').isLength({ min: 1 }).trim(),
	body('school', 'School must not be empty').isLength({ min: 1 }).trim(),
	body('age', 'Age must not be empty').isLength({ min: 1 }).trim(),
	body('phone', 'Phone Number must not be empty').isLength({ min: 1 }).trim(),

	// Sanitize fields.
	sanitizeBody('firstName').trim().escape(),
	sanitizeBody('lastName').trim().escape(),
	sanitizeBody('grade').trim().escape(),
	sanitizeBody('age').trim().escape(),
	sanitizeBody('phone').trim().escape(),


	function updateStudent(req, res, next){

		const errors = validationResult(req);

		var student_update =  new Student({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					grade: req.body.grade,
					school: req.body.school,
					age: req.body.age,
					phone: req.body.phone,
				 	_id: req.params.id
				})

		Student.findOneAndUpdate({_id: req.params.id}, student_update, function(err, thestudent){
			if (err){
				return next(err)
			} else {
				res.redirect(thestudent.url);
				}
		})
	}
// End of Student update post
]

exports.student_delete_get = function(req, res, next){
	Student.findById(req.params.id)
	.populate('school')
	.then(function(student){
		res.render('student_delete', {student, title:'Delete Student'});
	})
}

exports.student_delete_post = function(req, res, next){
	Student.findByIdAndDelete(req.params.id, function(callback){
		res.redirect("/students");
	})
}

exports.student_create_get = function(req, res, next){
	let header = 'Create Student';
	School.find({})
	.sort({name: 'asc'})
	.exec(function(err, list_schools){
		if(err){
			return next(err)
		}
		res.render('student_create',{title: header, schools: list_schools});
	})
}

exports.student_create_post = [

	// Validate fields.
	body('firstName', 'First name must not be empty.').isLength({ min: 1 }).trim(),
	body('lastName', 'Last name must not be empty.').isLength({ min: 1 }).trim(),
	body('grade', 'Grade must not be empty.').isLength({ min: 1 }).trim(),
	body('school', 'School must not be empty').isLength({ min: 1 }).trim(),
	body('age', 'Age must not be empty').isLength({ min: 1 }).trim(),
	body('phone', 'Phone Number must not be empty').isLength({ min: 1 }).trim(),
	
	// Sanitize fields.
	sanitizeBody('firstName').trim().escape(),
	sanitizeBody('lastName').trim().escape(),
	sanitizeBody('grade').trim().escape(),
	sanitizeBody('age').trim().escape(),
	sanitizeBody('phone').trim().escape(),
	
	(req, res, next) => {

		const errors = validationResult(req);

		var create_student = new Student({
			lastName: req.body.lastName,
			firstName: req.body.firstName,
			grade: req.body.grade,
			school: req.body.school,
			age: req.body.age,
			phone: req.body.phone
		})
		console.log(create_student);

		Student.create(create_student, function(err, thestudent){
			if(err){
				return next(err)
			}
			res.redirect(thestudent.url);
		})
	}
]
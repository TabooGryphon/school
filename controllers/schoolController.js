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

exports.school_update_get = function(req, res, next){
    School.findById(req.params.id)
    .exec(function(err, theschool){
        if(err){
            return next(err);
        }
        res.render('school_update',{title: 'Update School', school: theschool});
    })
}

exports.school_update_post = [

  // Validate fields.
	body('name', 'Name must not be empty.').isLength({ min: 1 }).trim(),
	body('address', 'Address must not be empty.').isLength({ min: 1 }).trim(),
	body('city', 'City must not be empty.').isLength({ min: 1 }).trim(),
	body('state', 'State must not be empty').isLength({ min: 1 }).trim(),
	body('phone', 'Phone number must not be empty').isLength({ min: 1 }).trim(),
	
	// Sanitize fields.
	sanitizeBody('name').trim().escape(),
	sanitizeBody('address').trim().escape(),
	sanitizeBody('city').trim().escape(),
	sanitizeBody('state').trim().escape(),
  sanitizeBody('phone').trim().escape(),
    
  (req, res, next) => {

		const errors = validationResult(req);
			
		var school_update = new School(
			{
				name: req.body.name,
				address: req.body.address,
				city: req.body.city,
				state: req.body.state,
				phone: req.body.phone,
				_id: req.params.id
			}
		)

		if(!errors.isEmpty()){
			School.findById(req.params.id)
			.exec(function(err, theschool){
				if(err){
					return next(err)
				}
				res.redirect(theschool.urlUpdate);
			})
		}else {
			School.findByIdAndUpdate(req.params.id, school_update, function(err, theschool){
				res.redirect(theschool.url);
			})
		 }
  }
]
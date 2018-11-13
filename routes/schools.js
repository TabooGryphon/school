// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const index_controller = require('../controllers/indexController');
const student_controller = require('../controllers/studentController');
const school_controller = require('../controllers/schoolController');

router.get('/', school_controller.schools_list);

router.get('/:id', school_controller.school_detail);

module.exports = router

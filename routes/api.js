// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const student_controller = require('../controllers/studentcontroller');
const school_controller = require('../controllers/schoolcontroller');
const ryan_controller = require('../controllers/ryanController');

// API Routes //
router.get('/', ryan_controller.ryan);


// Student Routes //
router.get('/student', student_controller.student_form);




module.exports = router

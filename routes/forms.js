// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const student_controller = require('../controllers/studentcontroller');
const school_controller = require('../controllers/schoolcontroller');
const forms_controller = require('../controllers/formsController');

// API Routes //
router.get('/', forms_controller.index);


// Student Routes //
router.get('/student', student_controller.student_list);

router.get('/student/help', student_controller.student_help);




module.exports = router

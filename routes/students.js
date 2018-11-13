// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const index_controller = require('../controllers/indexController');
const student_controller = require('../controllers/studentcontroller');
const school_controller = require('../controllers/schoolcontroller');

// Student Routes //

router.get('/', student_controller.student_list);

router.get('/:id/update', student_controller.student_update_get);

router.post('/:id/update', student_controller.student_update_post);

router.get('/:id', student_controller.student_detail);




module.exports = router

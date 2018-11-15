// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const student_controller = require('../controllers/studentcontroller');

// Student Routes //

router.get('/', student_controller.student_list);

router.get('/create', student_controller.student_create_get);

router.post('/create', student_controller.student_create_post);

router.get('/:id/update', student_controller.student_update_get);

router.post('/:id/update', student_controller.student_update_post);

router.get('/:id/delete', student_controller.student_delete_get);

router.post('/:id/delete', student_controller.student_delete_post);

router.get('/:id', student_controller.student_detail);




module.exports = router

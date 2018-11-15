// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const school_controller = require('../controllers/schoolController');

router.get('/', school_controller.schools_list);

router.get('/create', school_controller.school_create_get);

router.post('/create', school_controller.school_create_post);

router.get('/:id/update', school_controller.school_update_get);

router.post('/:id/update', school_controller.school_update_post);

router.get('/:id/delete', school_controller.school_delete_get);

router.post('/:id/delete', school_controller.school_delete_post);

router.get('/:id', school_controller.school_detail);

module.exports = router

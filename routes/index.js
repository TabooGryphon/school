// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const index_controller = require('../controllers/indexController');
const student_controller = require('../controllers/studentcontroller');
const school_controller = require('../controllers/schoolcontroller');

router.get('/', index_controller.main);

router.get('/create', index_controller.create);

module.exports = router
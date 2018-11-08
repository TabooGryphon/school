const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const index_controller = require('../controllers/indexController');

router.get('/', index_controller.main);

module.exports = router
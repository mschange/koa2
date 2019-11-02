const Router = require('koa-router')
const router = new Router();

const TagController = require('../controllers/logins')
router.get('/test', TagController.testDetail)

module.exports = router;
const Router = require('koa-router')
const router = new Router();

const TagController = require('../controllers/logins')
router.get('/list/:id/:test', TagController.lists)

module.exports = router;
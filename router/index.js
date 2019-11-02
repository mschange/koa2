const router = require('koa-router')();
const exampleRouter = require('./example.js');
const testRouter = require('./test.js');

const TagController = require('../controllers/logins')


router.use('/examples', exampleRouter.routes())
router.use('/test', testRouter.routes())


router.post('/', TagController.home)
router.get('/login', TagController.logins)


module.exports = router;
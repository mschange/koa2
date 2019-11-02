const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router/index.js')
const app = new Koa();

app.use(bodyParser())
app.use((cors()))
app.use(router.routes(), router.allowedMethods());

app.listen('3001', () => {
	console.log('success on port 3000')
})


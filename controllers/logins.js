const serviceLogin = require('../service/index')

module.exports = {
	async logins(ctx) {
		// console.log('--------------,进来了',ctx.query)
		let postData= ctx.query.id;
		// console.log(postData, '---------------')
		ctx.set('Content-Type', 'application/json;charset=UTF-8')
		// var rows = await db.query('select * from personal where id = 1');
		// console.log(rows, '----------');
		let data = await serviceLogin.login(postData);
		console.log(data, '===>>>data');
		// console.log(JSON.stringify({code: 200, data: {message: '请求成功', id: postData}}))
		ctx.body = JSON.stringify(
			{code: 200,
			data: {
				message: '请求成功',
				id: postData,
				data:data
			}});
	},
	async lists(ctx) {
		ctx.set('Content-Type', 'application/json;charset=UTF-8')
		console.log(ctx.params, '===============');
		var parmas = {
			code: 200,
			data: {
				message: '成功',
				data: ctx.params
			}
		}
		ctx.body = JSON.stringify(parmas);
	},
	async testDetail(ctx) {
		ctx.body = "测试";
	},
	async home(ctx) {
		// console.log(ctx.request.body, '------------------000000000')
		ctx.set('Content-Type', 'application/json;charset=UTF-8')
		var parmas = {
			code: 200,
			data: {
				message: '成功',
				data: ctx.request.body
			}
		}
		ctx.body = JSON.stringify(parmas);
	},
}


const router = require('koa-router')()
const { query } = require('../utils/async-db')
const logger = require('../utils/log_util')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {
  let sql = 'SELECT * FROM user'
  let dataList = await query(sql)
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

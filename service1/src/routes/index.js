import Router from 'koa-router'

import users from './users'

const router = new Router()

users(router)

router.get('/', async ctx => {
  console.log('Hello, Koa')
  ctx.body = 'Hello, Koa'
})

export default router

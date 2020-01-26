import Router from 'koa-router'

import orders from './orders'
import products from './products'

const router = new Router()

orders(router)
products(router)

router.get('/', async ctx => {
  console.log('Hello, Koa')
  ctx.body = 'Hello, Koa'
})

export default router

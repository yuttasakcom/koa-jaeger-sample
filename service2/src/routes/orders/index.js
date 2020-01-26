export default router =>
  router.get('/orders', async ctx => {
    ctx.body = { msg: 'Response from Orders' }
  })

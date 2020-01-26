export default router =>
  router.get('/products', async ctx => {
    ctx.body = { data: [{ id: 1, name: 'Notebook', price: '999' }] }
  })

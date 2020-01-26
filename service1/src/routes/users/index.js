import axios from 'axios'
import createAxiosTracing from 'axios-opentracing'

import tracer from '../../utils/tracer'

const applyTracingInterceptors = createAxiosTracing(tracer)

const API = axios.create({
  baseURL: 'http://localhost:5002',
})

export default router =>
  router.get('/users', async ctx => {
    applyTracingInterceptors(API, {
      span: ctx.req.span,
    })

    const [orders, products] = await Promise.all([
      API.get('/orders'),
      API.get('/products'),
    ])

    ctx.body = { data: { orders: orders.data, products: products.data } }
  })

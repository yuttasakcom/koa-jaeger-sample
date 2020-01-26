import c2k from 'koa-connect'
import proxyMiddleware from 'http-proxy-middleware'
import { FORMAT_HTTP_HEADERS } from 'opentracing'
import tracer from '../utils/tracer'

const onProxyReq = (_, req) => {
  tracer.inject(req.span, FORMAT_HTTP_HEADERS, req.headers)
  console.info('[SPAN]', req.span)
  console.info('[Header]', req.headers)
}

export default app => (proxyTable = []) => {
  if (Array.isArray(proxyTable)) {
    proxyTable.map(proxy =>
      app.use(c2k(proxyMiddleware({ ...proxy, onProxyReq })))
    )
  }
}

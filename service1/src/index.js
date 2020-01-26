import koa from 'koa'
import bodyParser from 'koa-bodyparser'

import jaeger from './middleware/jaeger'
import router from './routes'
import proxy from './routes/proxy'
import config from './config/jaeger'

const app = new koa()
const PORT = process.env.PORT || '3000'

app.use(jaeger())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())
proxy(app)(config.proxyTable)

app.listen(PORT, () => {
  console.log(`Server is running port:${PORT}`)
})

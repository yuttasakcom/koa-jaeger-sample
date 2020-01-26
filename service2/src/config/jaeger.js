export default {
  jaegerConfig: {
    serviceName: `${process.env.ENV || ''}.servic2`,
    reporter: {
      agentHost: 'localhost',
      agentPort: 6832,
    },
  },
  proxyTable: [
    {
      target: `http://localhost:${process.env.PORT || '3000'}`,
      changeOrigin: true,
    },
  ],
}

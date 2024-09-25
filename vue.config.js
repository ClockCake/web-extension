const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080, // 您可以根据需要更改这个端口
    allowedHosts: 'all',
    webSocketServer: false // 这里禁用 WebSocket
  },
})

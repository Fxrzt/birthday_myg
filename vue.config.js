// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/birthday_myg/'   // ชื่อ repo ของคุณ ใส่ชื่อ repo ที่แท้จริงตรงนี้
    : '/'
})

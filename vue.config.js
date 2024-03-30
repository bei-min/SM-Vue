module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 5173,
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080/demo_war/api',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                    //  '^/api': '/' 效果完全一样
                }
            }
        }
    }
}
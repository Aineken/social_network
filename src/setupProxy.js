const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://social-network.samuraijs.com/api/1.0',
            changeOrigin: true,
        })
    );
    app.use(
        '/ayan',
        createProxyMiddleware({
            target: 'https://www.google.com',
            changeOrigin: true,
        })
    );
};

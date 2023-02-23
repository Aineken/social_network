const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function (app) {


    app.use(
        "/api/1.0",
        createProxyMiddleware({
            target: 'https://social-network.samuraijs.com',
            changeOrigin: true,
        })
    );
};

const { createProxyMiddleware } = require('http-proxy-middleware')
console.log('testing connection')
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/", { target: "http://localhost:5000/", secure: false, })
    );
};
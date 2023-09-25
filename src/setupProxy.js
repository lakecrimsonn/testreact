const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1/uploadStandardImage",
    createProxyMiddleware( {
      target: "http://192.168.0.9:8080",
      changeOrigin: true,
    })
  );
};

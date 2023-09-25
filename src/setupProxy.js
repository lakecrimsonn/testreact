const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1/uploadStandardImage", {
      target: "http://192.168.0.15:8080",
      changeOrigin: true,
    })
  );
};

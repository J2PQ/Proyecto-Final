module.exports = app => {
  app.use("/api", require("./index.routes"))

  app.use("/api/auth", require("./auth.routes"))
}

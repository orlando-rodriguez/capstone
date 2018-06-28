const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const morgan = require("morgan")
const app = express()
const route = require("./routes/routes")
app.use("/", route)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors({
  origin: true,
  credentials: true
}))
app.use((req, res, next) => {
  const err = new Error("Not Found")
  err.status = 404
  next(err)
})
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    })
})
module.exports = app

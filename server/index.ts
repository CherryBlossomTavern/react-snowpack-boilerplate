import express from "express"
const app = express()

import http from "http"
const server = http.createServer(app)

import config from "./config"
const PORT = config.port

app.use(express.json())

// Set Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Origin", req.headers.origin || req.headers.host)
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept")
  next()
})

import API from "./api"
app.use("/api", API)

import path from "path"
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.static(path.join(__dirname, "../build")))
app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"))

  return
})

server.listen(PORT, () => console.log("API started successfully is now accepting request on port:", PORT))

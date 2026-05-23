const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io")
const { YSocketIO } = require("y-socket.io/dist/server")
const path = require("path")

const app = express()

const frontendPath = path.join(__dirname, "../frontend/dist")

app.use(express.static(frontendPath))

const httpServer = createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const ySocketIO = new YSocketIO(io)

ySocketIO.initialize()

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  })
})

app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"))
})

const PORT = 4000

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
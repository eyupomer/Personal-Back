require("dotenv").config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5001
const connect = require("./src/config/dbConnection")

//! Routers
const userRouter = require('./src/routers/User')
const projectRouter = require('./src/routers/Project')
const skillRouter = require('./src/routers/Skills')
const contactRouter = require('./src/routers/Contact')

app.use(express.json())
app.use(cors())
app.use("/api/user", userRouter)
app.use("/api/project", projectRouter)
app.use("/api/skill", skillRouter)
app.use("/api/contact", contactRouter)

app.get('/', (req, res) => {
    res.send("App is running :)")
})

app.listen(port, () => {
    connect()
    console.log(`Server listening on port : ${port}`);
})
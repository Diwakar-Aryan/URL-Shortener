const express = require('express')

const mongoose = require('mongoose')
const path = require('path')
const urlRouter = require('./routes/routes')
const connectDB = require('./mongoose')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', urlRouter)

const start = async () => {
  try {
    await connectDB()
    app.listen(5000, console.log(`Server is not listening at 8080`))
  } catch (error) {
    console.log(error)
  }
}
start()

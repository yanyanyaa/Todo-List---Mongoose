const express = require('express')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


const PORT = process.env.PORT

app.get('/', (req,res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
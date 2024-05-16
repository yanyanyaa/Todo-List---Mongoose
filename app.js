const express = require('express')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT

app.get('/', (req,res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
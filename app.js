const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

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

app.engine('hbs', exphbs({ defaultLayouts: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})
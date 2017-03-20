const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()

// compression middleware
app.use(compression())

// serve static stuff like style.css
app.use(express.static('public'))

// send all requests to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// production server, localhost:8080
const PORT = process.env.PORT || 4444
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})

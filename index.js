const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) =>
    res.redirect('https://github.com/muZk/donna-scheduler')
  )
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

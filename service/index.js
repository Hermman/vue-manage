const path = require('path')
const express = require('express')
// const bodyParser = require('body-parser')
require('../db/dbBase')
const user = require('../db/userScherma')

const app = new express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(bodyParser)

app.get('/', function (req, res) {
  console.log(req)
  res.send()
})

app.get('/login', function (req, res) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-type, Accept')
    user.find()
      .then(user => {
        res.status(200).send(user)
      })
  } catch(err) {
    throw new Error(err)
  }
})

app.listen(port, function () {
  console.info(`server is running on prot ${port}`)
})
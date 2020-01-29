const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))

app.use('/', router)

app.listen(port, () => console.log('this app run in port : ', port))
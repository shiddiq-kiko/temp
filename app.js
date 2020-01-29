const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))
app.use(session({
    secret : 'cat',
    resave : false,
    saveUninitialized : true
}))

app.use('/', router)

app.listen(port, () => console.log('this app run in port :', port))
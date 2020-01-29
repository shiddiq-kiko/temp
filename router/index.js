const router = require('express').Router()
const Contact = require('./routerContact')
const Login = require('./routerLogin')

router.get('/', (req, res) => res.redirect('/contacts'))
router.use('/login', Login)
router.use('/contacts', Contact)

module.exports = router
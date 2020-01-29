const router = require('express').Router()
const Controller = require('../controllers/loginController')

router.get('/', Controller.form)
router.post('/', Controller.login)
router.get('/logout', Controller.logout)

module.exports = router
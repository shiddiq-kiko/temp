const router = require('express').Router()
const Controller = require('../controllers/contactController')
const Middleware = require('../middleware/middleware')

router.get('/', Controller.readAll)
router.get('/add', Middleware.checkLogin, Controller.add)
router.post('/add', Controller.create)
router.get('/edit/:id', Middleware.checkLogin, Controller.readOne)
router.post('/edit/:id', Controller.edit)
router.get('/delete/:id', Middleware.checkLogin, Controller.delete)

module.exports = router
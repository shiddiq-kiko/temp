const router = require('express').Router()
const Controller = require('../controllers/menuController')

router.get('/', Controller.readAll)
router.post('/', Controller.add)
router.get('/:id/edit', Controller.readOne)
router.post('/:id/edit', Controller.edit)
router.get('/:id/delete', Controller.delete)

module.exports = router
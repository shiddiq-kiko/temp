const router = require('express').Router()
const menuRoter = require('./menuRouter')

router.get('/', (req, res) => res.redirect('/menus'))
router.use('/menus', menuRoter)

module.exports = router
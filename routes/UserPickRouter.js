const router = require('express').Router()
const controller = require('../controllers/UserPickController')

router.get('/:UserPickId', controller.GetUserPick)
router.get('/', controller.GetAllUserPicks)

module.exports = router

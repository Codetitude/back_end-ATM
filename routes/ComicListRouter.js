const router = require('express').Router()
const controller = require('../controllers/ComicListController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllComics
)

module.exports = router

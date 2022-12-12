const router = require('express').Router()
const controller = require('../controllers/UserPickController')
const middleware = require('../middleware')

router.get(
  '/:userpick_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserPickById
)

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllUserPicks
)

router.post(
  '/create/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateUserPick
)

router.put(
  '/update/:userpick_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUserPick
)

router.delete(
  '/delete/:userpick_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUserPick
)

module.exports = router

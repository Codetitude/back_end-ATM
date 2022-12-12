const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')
router.post('/create', controller.CreateUser)

router.get('/', controller.GetAllUsers)

router.get('/:id', controller.GetUserById)

router.post('/register', controller.Register)

router.post('/login', controller.Login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.put(
  '/updatepassword/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

module.exports = router

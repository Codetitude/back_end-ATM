const router = require('express').Router()
const controller = require('../controllers/BlogPostController')
const middleware = require('../middleware')

router.get(
  '/:blogpost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetBlogPostById
)

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllBlogPosts
)

router.post(
  '/create/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBlogPost
)

router.put(
  '/update/:blogpost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateBlogPost
)

router.delete(
  '/delete/:blogpost_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBlogPost
)

module.exports = router

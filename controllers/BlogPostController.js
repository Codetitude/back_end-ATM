const { BlogPost } = require('../models')

const GetBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByPk(req.params.blogpost_id)
    res.send(blogPost)
  } catch (error) {
    throw error
  }
}

const GetAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll()
    res.send(blogPosts)
  } catch (error) {
    throw error
  }
}

const CreateBlogPost = async (req, res) => {
  try {
    let BlogPostId = parseInt(req.params.blogpost_id)
    let reviewBody = {
      blogpost_id: BlogPostId,
      ...req.body
    }
    let blogPost = await BlogPost.create(reviewBody)
    res.send(blogPost)
  } catch (error) {
    throw error
  }
}

const UpdateBlogPost = async (req, res) => {
  try {
    const blogpost = await BlogPost.update(
      { ...req.body },
      { where: { id: req.params.blogpost_id }, returning: true }
    )
    res.send(blogpost)
  } catch (error) {
    throw error
  }
}

const DeleteBlogPost = async (req, res) => {
  try {
    await BlogPost.destroy({ where: { id: req.params.blogpost_id } })
    res.send({
      msg: 'Review has been Deleted!',

      status: 'OK!'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBlogPostById,
  GetAllBlogPosts,
  CreateBlogPost,
  UpdateBlogPost,
  DeleteBlogPost
}

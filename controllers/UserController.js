const { User } = require('../models')
const middleware = require('../middleware')

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
    console.log(user)
  } catch (error) {
    throw error
  }
}

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let { username, email, passwordDigest } = req.body
    console.log(req.body)

    const user = await User.create({ username, email, passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    let { username, email, password } = req.body
    console.log(req.body)
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ username, email, passwordDigest })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    // const user = await User.findOne({
    //   where: { email: req.body.email }
    // })
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })

    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  GetUserById,
  GetAllUsers,
  Login,
  Register,
  CreateUser,
  UpdatePassword,
  CheckSession
}

const { UserPick } = require('../models')

const GetUserPickById = async (req, res) => {
  try {
    const userPick = await UserPick.findByPk(req.params.userpick_id)
    res.send(userPick)
    console.log(userPick)
  } catch (error) {
    throw error
  }
}

const GetAllUserPicks = async (req, res) => {
  try {
    const userPicks = await UserPick.findAll()
    res.send(userPicks)
  } catch (error) {
    throw error
  }
}

const CreateUserPick = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let reviewBody = {
      user_id: userId,
      ...req.body
    }
    let userPick = await UserPick.create(reviewBody)
    res.send(userPick)
  } catch (error) {
    throw error
  }
}

const UpdateUserPick = async (req, res) => {
  try {
    const userPick = await UserPick.update(
      { ...req.body },
      { where: { id: req.params.userpick_id }, returning: true }
    )
    res.send(userPick)
  } catch (error) {
    throw error
  }
}

const DeleteUserPick = async (req, res) => {
  try {
    await UserPick.destroy({ where: { id: req.params.userpick_id } })
    res.send({
      msg: 'Review has been Deleted!',
      // payload: req.params.review_id,
      status: 'OK!'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserPickById,
  GetAllUserPicks,
  CreateUserPick,
  UpdateUserPick,
  DeleteUserPick
}

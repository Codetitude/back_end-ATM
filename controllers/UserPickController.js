const { UserPick } = require('../models')

const GetUserPick = async (req, res) => {
  try {
    const userPick = await UserPick.findByPk(req.params.UserPickId)
    res.send(userPick)
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

module.exports = {
  GetUserPick,
  GetAllUserPicks
}

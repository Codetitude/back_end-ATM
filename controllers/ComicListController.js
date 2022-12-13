const { ComicList } = require('../models')

const GetAllComics = async (req, res) => {
  try {
    const comics = await ComicList.findAll()
    res.send(comics)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComics
}

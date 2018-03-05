const { Bookmark, Song} = require('../models')
const _ = require ('lodash')

// declaring register endpoints
module.exports = {
  // index method which grabs the email and password from the body and finds user using the email given to find email in databse
  async  index (req, res) {
    try {
      // assign songId and userIdin the query string to variable songId an  userId
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      // returns an array of all the bookmarks with song model nested inside it
      const  bookmarks= await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song 
          }
        ] 
      // map method to include only bookmarkId to Song object  
      }).map(bookmark => bookmark.toJSON())
      .map(bookmark => _.extend({},bookmark.Song, bookmark))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while trying to fetch bookmark'
      })
    }
  },
  async  post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
      const  bookmark= await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if(bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while trying to create bookmark'
      })
    }
  },
  async  remove (req, res) {
    try {
      const userId = req.user.id
      const {bookmarkId} = req.params
      const  bookmark= await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      }
      )
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured while trying to delete  bookmark'
      })
    }
  }
}

const { Song } = require('../models')

// declaring register endpoints
module.exports = {
    // index method which grabs the email and password from the body and finds user using the email given to find email in databse
    async  index (req, res) {
        try {
            // check if seaarch is in the query string
            const search = req.query.search
            let songs = null
            if (search) {
                songs = await Song.findAll({
                    where: {
                        $or: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                }
                )
            } else{
            songs = await Song.findAll ({
                limit: 10
            })
              }
            res.send (songs) 
        } catch (err) { 
            res.status(500).send({
                error: 'An error occured while trying to fetch songs'
            })
        }

    },
    async  show (req, res) {
        try {
            const song = await Song.findById (req.params.songId)
            res.send (song) 
        } catch (err) { 
            res.status(500).send({
                error: 'An error occured while trying to show songs'
            })
        }

    },
    async  post (req, res) {
        try {
            const song = await Song.create (req.body)
            res.send (song) 
        } catch (err) { 
            res.status(500).send({
                error: 'An error occured while trying to create the song'
            })
        }

    },
    async  put (req, res) {
        try {
            // update model(database) with user input where id is same as id on route parameter 
            const song = await Song.update (req.body, {
                where: {
                    id: req.params.songId
                }
            })
            // respond with the given user input
            res.send (req.body) 
        } catch (err) { 
            res.status(500).send({
                error: 'An error occured while trying to update the song'
            })
        }

    }
}

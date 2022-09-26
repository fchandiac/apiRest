const express = require('express')
const router = express.Router()
const reviews = require('../database/controllers/reviews')

router.post('/reviews/create', (req, res) => {
    reviews.create(req.body.value, req.body.comment, req.body.user_id, req.body.profile_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/reviews/findall', (req, res) => {
    reviews.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/reviews/findAllByUser', (req, res) => {
    reviews.findAllByUser(req.body.user_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router

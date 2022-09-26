const express = require('express')
const router = express.Router()
const socialnetworks = require('../database/controllers/socialnetworks')


router.post('/socialnetworks/update', (req,res) => {
    socialnetworks.update(req.body.id, req.body.url)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/socialnetworks/findAllByApp', (req, res) => {
    socialnetworks.findAllByApp(req.body.app)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
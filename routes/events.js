const express = require('express')
const router = express.Router()
const events = require('../database/controllers/events')

router.post('/events/create', (req, res) => {
    events.create(
        req.body.name,
        req.body.description,
        req.body.date,
        req.body.start,
        req.body.end,
        req.body.office
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/events/destroy', (req, res) => {
    events.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/events/findAllByDate', (req,res) => {
    events.findAllByDate(req.body.date)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.get('/events/findAllByTurismo', (req,res) => {
    events.findAllByTurismo()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
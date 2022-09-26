const express = require('express')
const router = express.Router()
const trainings = require('../database/controllers/trainings')

router.post('/trainings/create', (req, res) => {
    trainings.create(
        req.body.name,
        req.body.state,
        req.body.mode,
        req.body.totalhours,
        req.body.dayHours,
        req.body.startDate,
        req.body.endDate,
        req.body.benefits,
        req.body.schedule,
        req.body.requirements,
        req.body.dni,
        req.body.rsh,
        req.body.ce
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/trainings/findAll', (req, res) => {
    trainings.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/trainings/destroy', (req, res) => {
    trainings.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/trainings/update', (req, res) => {
    trainings.update(
        req.body.id,
        req.body.name,
        req.body.state,
        req.body.mode,
        req.body.totalhours,
        req.body.dayHours,
        req.body.startDate,
        req.body.endDate,
        req.body.benefits,
        req.body.schedule,
        req.body.requirements,
        req.body.dni,
        req.body.rsh,
        req.body.ce
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
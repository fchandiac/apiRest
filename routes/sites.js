const express = require('express')
const router = express.Router()
const sites = require('../database/controllers/sites')

router.post('/sites/create', (req, res) => {
    sites.create(req.body.name, req.body.category, req.body.description, req.body.map)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/sites/findAll', (req, res) => {
    sites.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sites/destroy', (req, res) => {
    sites.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/sites/update', (req, res) => {
    sites.update(req.body.id, req.body.name, req.body.category, req.body.description, req.body.map)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
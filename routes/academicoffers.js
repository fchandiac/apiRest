const express = require('express')
const router = express.Router()
const academicoffers = require('../database/controllers/academicoffers')

router.post('/academicoffers/create', (req, res) => {
    academicoffers.create(
        req.body.name, 
        req.body.type, 
        req.body.description,
        req.body.mode, 
        req.body.quota, 
        req.body.start, 
        req.body.end, 
        req.body.place, 
        req.body.inscription
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/academicoffers/findAll', (req, res) => {
    academicoffers.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/academicoffers/destroy', (req, res) => {
    academicoffers.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/academicoffers/update', (req, res) => {
    academicoffers.update(
        req.body.id,
        req.body.name, 
        req.body.type, 
        req.body.description,
        req.body.mode, 
        req.body.quota, 
        req.body.start, 
        req.body.end, 
        req.body.place, 
        req.body.inscription
        )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/academicoffers/findAllByType', (req, res) => {
    academicoffers.findAllByType(req.body.type)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
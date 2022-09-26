const express = require('express')
const router = express.Router()
const laboraloffers = require('../database/controllers/laboraloffers')


router.post('/laboraloffers/create', (req, res) => {
    laboraloffers.create(
        req.body.name, 
        req.body.state,
        req.body.quota,
        req.body.description,
        req.body.postulation
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/laboraloffers/findAll', (req, res) => {
    laboraloffers.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/laboraloffers/destroy', (req,res) => {
    laboraloffers.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/laboraloffers/update', (req,res) => {
    laboraloffers.update(
        req.body.id,
        req.body.name, 
        req.body.state,
        req.body.quota,
        req.body.description,
        req.body.postulation
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.get('/laboraloffers/findAllByStateTrue', (req, res) => {
    laboraloffers.findAllByStateTrue()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
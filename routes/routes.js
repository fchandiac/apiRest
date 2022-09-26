const express = require('express')
const router = express.Router()
const routes = require('../database/controllers/routes')

router.post('/routes/create', (req, res) => {
    routes.create(req.body.name, req.body.category, req.body.description, req.body.map)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/routes/findAll', (req, res) => {
    routes.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/routes/destroy', (req, res) => {
    routes.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/routes/update', (req, res) => {
    routes.update(
        req.body.id,
        req.body.name, 
        req.body.category, 
        req.body.description, 
        req.body.map
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/routes/destroy', (req, res) => {
    routes.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router
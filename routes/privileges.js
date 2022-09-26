const express = require('express')
const router = express.Router()
const privileges = require('../database/controllers/privileges')

router.post('/privileges/create', (req, res) => {
    privileges.create(
        req.body.name,
        req.body.admin, 
        req.body.emprende, 
        req.body.turismo, 
        req.body.omil, 
        req.body.fomento, 
        req.body.academia,
        req.body.joven
        ).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/privileges/findAll', (req, res) => {
    privileges.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/privileges/destroy', (req, res) => {
    privileges.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/privileges/update', (req, res) => {
    privileges.update(
        req.body.id,
        req.body.name,
        req.body.admin, 
        req.body.emprende, 
        req.body.turismo, 
        req.body.omil, 
        req.body.fomento, 
        req.body.academia,
        req.body.joven
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})



router.post('/privileges/findOneById', (req,res) => {
    privileges.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
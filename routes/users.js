const express = require('express')
const router = express.Router()
const users = require('../database/controllers/users')

router.post('/users/create', (req,res) => {
    users.create(
        req.body.rut,
        req.body.name,
        req.body.gender,
        req.body.born,
        req.body.phone,
        req.body.mail,
        req.body.address,
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

router.get('/users/findAll', (req, res) =>{
    users.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/findOneById', (req,res) => {
    users.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/findOneByName', (req,res) => {
    users.findOneById(req.body.name)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/destroy', (req, res) => {
    users.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/users/update', (req, res) => {
    users.update(
        req.body.id,
        req.body.rut,
        req.body.name,
        req.body.gender,
        req.body.born,
        req.body.phone,
        req.body.mail,
        req.body.address,
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

module.exports = router
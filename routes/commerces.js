const express = require('express')
const router = express.Router()
const commerces = require('../database/controllers/commerces')


router.post('/commerces/create', (req, res) => {
    commerces.create(
        req.body.rut,
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.address,
        req.body.formalization,
        req.body.sii,
        req.body.description,
        req.body.whatsapp,
        req.body.instagram,
        req.body.facebook,
        req.body.map,
        req.body.latitude,
        req.body.length,
        req.body.emprende,
        req.body.emprende_pos,
        req.body.turismo,
        req.body.turismo_pos,
        req.body.user_id,
        req.body.category_id
    )
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/commerces/findAll', (req, res) => {
    commerces.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/commerces/findAllEmprende', (req, res) => {
    commerces.findAllEmprende({

    })
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/commerces/findAllTurismo', (req, res) => {
    commerces.findAllTurismo({

    })
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


router.post('/commerces/update', (req, res) => {
    commerces.update(
        req.body.id,
        req.body.rut,
        req.body.name,
        req.body.phone,
        req.body.mail,
        req.body.address,
        req.body.formalization,
        req.body.sii,
        req.body.description,
        req.body.whatsapp,
        req.body.instagram,
        req.body.facebook,
        req.body.map,
        req.body.latitude,
        req.body.length,
        req.body.emprende,
        req.body.emprende_pos,
        req.body.turismo,
        req.body.turismo_pos,
        req.body.category_id
    )
    .then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})

router.post('/commerces/destroy', (req, res) => {
    commerces.destroy(req.body.id)
    .then(data => {
        console.log(data)
        res.json(data)
    }).catch(err => {
        console.log(err)
        res.json(err)
    })
})



module.exports = router
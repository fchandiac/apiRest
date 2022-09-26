const express = require('express')
const router = express.Router()
const profiles = require('../database/controllers/profiles')


router.post('/profiles/findOneByUser', (req, res) => {
    profiles.findOneByUser(req.body.user).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/profiles/create', (req, res) => {
    profiles.create(
        req.body.user,
        req.body.pass, 
        req.body.name, 
        req.body.mail,
        req.body.privilege_id
        ).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.post('/profiles/updatePass', (req, res) => {
    profiles.updatePass(
        req.body.id,
        req.body.pass
        ).then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/profiles/findAll', (req, res) => {
    profiles.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/profiles/destroy', (req, res) => {
    profiles.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/profiles/update', (req, res) => {
    profiles.update(
        req.body.id, req.body.name, req.body.privilege_id
    ).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})




module.exports = router
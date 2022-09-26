const express = require('express')
const router = express.Router()
const attentions = require('../database/controllers/attentions')


router.post('/attentions/create', (req, res) => {
    attentions.create(req.body.description,req.body.office, req.body.project, req.body.projectname, req.body.user_id, req.body.profile_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/attentions/findAll', (req, res) => {
    attentions.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/attentions/destroy', (req, res) => {
    attentions.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
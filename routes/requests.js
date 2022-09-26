const express = require('express')
const router = express.Router()
const requests = require('../database/controllers/requests')

router.post('/requests/create', (req, res) => {
    requests.create(req.body.subject, req.body.message, req.body.app)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/requests/findAllbyApp', (req,res) => {
    requests.findAllByApp(req.body.app)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/requests/updateViewed', (req, res) => {
    requests.updateViewed(req.body.id, req.body.viewed, req.body.viewed_profile_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/requests/updateResolved', (req, res) => {
    requests.updateResolved(req.body.id, req.body.resolved, req.body.resolved_profile_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router
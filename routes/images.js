const express = require('express')
const router = express.Router()
const images = require('../database/controllers/images')

router.post('/images/createCommerceImg', (req, res) => {
    images.createCommerceImg(req.body.url, req.body.commerce_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/images/findCommerceImgs', (req, res) => {
    images.findCommerceImgs(req.body.commerce_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/images/createSiteImg', (req, res) => {
    images.createSiteImg(req.body.url, req.body.site_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/images/createRouteImg', (req, res) => {
    images.createRouteImg(req.body.url, req.body.route_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/images/findSiteImgs', (req, res) => {
    images.findSiteImgs(req.body.site_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/images/findRouteImgs', (req, res) => {
    images.findRouteImgs(req.body.route_id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/images/destroy', (req, res) => {
    images.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')


router.post('/commerces/uploadImage', upload.commerceImage(), (req, res) => {
    // console.log(req.file)
   res.json(req.file)
})

router.post('/sites/uploadImage', upload.siteImage(), (req, res) => {
    // console.log(req.file)
   res.json(req.file)
})

router.post('/routes/uploadImage', upload.routeImage(), (req, res) => {
    // console.log(req.file)
   res.json(req.file)
})

module.exports = router
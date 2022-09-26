const multer = require('multer')


function commerceImage (){

    const storage = multer.diskStorage({
        destination: './public/images/commerces',
        filename: function(_req, file, cb){
            var ext = file.originalname.slice(file.originalname.lastIndexOf('.'))
            cb(null, Date.now() + ext )
        }
    })

    const upload = multer({storage: storage}).single('file')

    return upload

}

function siteImage (){

    const storage = multer.diskStorage({
        destination: './public/images/sites',
        filename: function(_req, file, cb){
            var ext = file.originalname.slice(file.originalname.lastIndexOf('.'))
            cb(null, Date.now() + ext )
        }
    })
    const upload = multer({storage: storage}).single('file')

    return upload
}

function routeImage (){

    const storage = multer.diskStorage({
        destination: './public/images/routes',
        filename: function(_req, file, cb){
            var ext = file.originalname.slice(file.originalname.lastIndexOf('.'))
            cb(null, Date.now() + ext )
        }
    })
    const upload = multer({storage: storage}).single('file')

    return upload
}



module.exports = {commerceImage, siteImage, routeImage}





const express = require('express')
const app = express()
const path = require('path')


const port = process.env.PORT || 3002
app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require('cors')
app.use(cors({ origin: '*' }))


app.use(express.static(__dirname + '/public'))

app.use(require('./routes/privileges'))
app.use(require('./routes/profiles'))
app.use(require('./routes/records'))
app.use(require('./routes/users'))
app.use(require('./routes/categories'))
app.use(require('./routes/reviews'))
app.use(require('./routes/socialnetworks'))
app.use(require('./routes/attentions'))
app.use(require('./routes/commerces'))
app.use(require('./routes/requests'))
app.use(require('./routes/uploads'))
app.use(require('./routes/sites'))
app.use(require('./routes/images'))
app.use(require('./routes/routes'))
app.use(require('./routes/events'))
app.use(require('./routes/academicoffers'))
app.use(require('./routes/laboraloffers'))
app.use(require('./routes/trainings'))


app.listen(port, () => {
    console.log('server work! at port: ' + port)
})

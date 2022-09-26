const { Socialnetworks } = require('../db')
const socialnetworks = {}

async function update(id, url) {
    const social = await Socialnetworks.update({
        url:url
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return social
}

async function findAllByApp(app) {
    const social = await Socialnetworks.findAll({
        where:{app:app}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return social
}

socialnetworks.update = update
socialnetworks.findAllByApp = findAllByApp


module.exports = socialnetworks
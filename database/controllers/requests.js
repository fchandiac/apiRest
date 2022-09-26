
const { Requests, Profiles } = require('../db')
const requests = {}

async function create(subject, message, app) {
    const request = await Requests.create({
        subject: subject,
        message: message,
        app: app
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return request
}

async function findAllByApp(app) {
    const request = await Requests.findAll({
        where: { app: app },
        include: [{ model: Profiles, as: 'viewedProfile' }, { model: Profiles, as: 'resolvedProfile' }],
        order: [
            ['viewed', 'ASC'],
            ['resolved', 'ASC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => {
            console.log(err)
            return { 'code': 0, 'data': err }
        })
    return request
}

async function updateViewed(id, viewed, viewed_profile_id){
    const request = await Requests.update({
        viewed: viewed, viewed_profile_id: viewed_profile_id
    },{
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return request

}

async function updateResolved(id,resolved,resolved_profile_id){
    const request = await Requests.update({
        resolved:resolved,resolved_profile_id:resolved_profile_id
    },{
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return request
}

requests.create = create
requests.findAllByApp = findAllByApp
requests.updateResolved = updateResolved
requests.updateViewed = updateViewed


module.exports = requests
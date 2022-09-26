const { Profiles, Privileges } = require('../db')
const profiles = {}


async function create(user, pass, name, mail, privilege_id) {
    const profile = await Profiles.create({
        user: user,
        pass: pass,
        name: name,
        mail: mail,
        privilege_id: privilege_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function findOneByUser(user) {
    const profile = await Profiles.findOne({
        where: { user: user },
        include: { model: Privileges }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function update(id, name, privilege_id) {
    const profile = await Profiles.update({
        name: name,
        privilege_id: privilege_id
    }, {
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function updatePass(id, pass) {
    const profile = await Profiles.update({
        pass: pass
    }, {
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function findAll() {
    const profile = await Profiles.findAll({
        include: { model: Privileges }
    })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

async function destroy(id) {
    const profile = await Profiles.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return profile
}

profiles.create = create
profiles.findOneByUser = findOneByUser
profiles.updatePass = updatePass
profiles.update = update
profiles.findAll = findAll
profiles.destroy = destroy

module.exports = profiles
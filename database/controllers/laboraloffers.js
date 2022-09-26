const { Laboraloffers } = require('../db')
const laboraloffers = {}

async function create(name, state, quota, description, postulation) {
    const offer = await Laboraloffers.create({
        name: name,
        state: state,
        quota: quota,
        description: description,
        postulation: postulation
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function findAll() {
    const offer = await Laboraloffers.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function destroy(id) {
    const offer = await Laboraloffers.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function update(id, name, state, quota, description, postulation) {
    const offer = await Laboraloffers.update(
        {
            name: name,
            state: state,
            quota: quota,
            description: description,
            postulation: postulation
        }, { where: { id: id } }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function findAllByStateTrue(){
    const offer = await Laboraloffers.findAll({
        where:{state: true}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

laboraloffers.create = create
laboraloffers.findAll = findAll
laboraloffers.destroy = destroy
laboraloffers.update = update
laboraloffers.findAllByStateTrue = findAllByStateTrue

module.exports = laboraloffers



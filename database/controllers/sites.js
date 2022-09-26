const { Sites } = require('../db')
const sites = {}

async function create(name, category, description, map) {
    const site = await Sites.create({
        name: name,
        category: category,
        description: description,
        map: map
    })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return site
}

async function findAll() {
    const site = await Sites.findAll()
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return site
}

async function destroy(id) {
    const site = await Sites.destroy({
        where: { id: id }
    })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return site
}

async function update(id, name, category, description, map) {
    const site = await Sites.update(
        {
            name: name,
            category: category,
            description: description,
            map: map
        },
        { where: { id: id } })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return site
}


sites.create = create
sites.findAll = findAll
sites.destroy = destroy
sites.update = update


module.exports = sites
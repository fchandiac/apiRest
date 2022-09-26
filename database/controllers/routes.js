const { Routes } = require('../db')
const routes = {}

async function create(name, category, description, map) {
    const route = await Routes.create({
        name: name,
        category: category,
        description: description,
        map: map
    })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function findAll() {
    const route = await Routes.findAll()
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function destroy(id) {
    const route = await Routes.destroy({
        where: { id: id }
    })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return route
}

async function update(id, name, category, description, map) {
    const route = await Routes.update(
        {
            name: name,
            category: category,
            description: description,
            map: map
        },
        { where: { id: id } })
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return route
}


routes.create = create
routes.findAll = findAll
routes.destroy = destroy
routes.update = update

module.exports = routes
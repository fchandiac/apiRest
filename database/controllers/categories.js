const { Categories } = require('../db')
const categories = {}

async function create(name, turismo, emprende) {
    const category = await Categories.create({
        name: name,
        turismo: turismo,
        emprende: emprende
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return category
}

async function findAll() {
    const category = await Categories.findAll()
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return category
}

async function findAllEmprende() {
    const category = await Categories.findAll({
        where: { emprende: true }
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return category
}

async function destroy(id) {
    const category = await Categories.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return category
}

async function update(id, name, turismo, emprende) {
    const category = await Categories.update(
        {
            name: name,
            turismo: turismo,
            emprende: emprende
        }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return category
}

categories.create = create
categories.findAll = findAll
categories.findAllEmprende = findAllEmprende
categories.destroy = destroy
categories.update = update


module.exports = categories
const { Privileges } = require('../db')
const privileges = {}

async function create(name, admin, emprende, turismo, omil, fomento, academia, joven) {
    const privilege = await Privileges.create({
        admin: admin,
        name: name,
        emprende: emprende,
        turismo: turismo,
        omil: omil,
        fomento: fomento,
        academia: academia,
        joven: joven
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return privilege
}

async function findAll() {
    const privilege = await Privileges.findAll()
        .then(data => { return { 'code': 1, 'data': data } })
        .catch(err => { return { 'code': 0, 'data': err } })
    return privilege
}

async function destroy(id) {
    const privilege = await Privileges.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return privilege
}

async function update(id, name, admin, emprende, turismo, omil, fomento, academia, joven) {
    const privilege = await Privileges.update(
        {
            admin: admin,
            name: name,
            emprende: emprende,
            turismo: turismo,
            omil: omil,
            fomento: fomento,
            academia: academia,
            joven: joven
        },
        {where: {id:id}}
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return privilege
}

async function findOneById(id){
    const privilege = await Privileges.findOne({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return privilege
}

privileges.create = create
privileges.findAll = findAll
privileges.destroy = destroy
privileges.update = update
privileges.findOneById = findOneById


module.exports = privileges

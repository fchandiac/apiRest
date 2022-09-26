const { Users } = require('../db')
const users = {}

async function create(rut, name, gender, born, phone, mail, address, turismo, omil, fomento, academia, joven) {
    const user = await Users.create({
        rut: rut,
        name: name,
        gender: gender,
        born: born,
        phone: phone,
        mail: mail,
        address: address,
        turismo: turismo,
        omil: omil,
        fomento: fomento,
        academia: academia,
        joven: joven
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user

}

async function findAll() {
    const user = await Users.findAll({
        order: [
            ['name', 'ASC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findOneById(id) {
    const user = await Users.findOne({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function findOneByName(name) {
    const user = await Users.findOne({
        where: { name: name }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function destroy(id) {
    const user = await Users.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}

async function update(id, rut, name, gender, born, phone, mail, address, turismo, omil, fomento, academia, joven) {
    const user = await Users.update(
        {
            rut: rut,
            name: name,
            gender: gender,
            born: born,
            phone: phone,
            mail: mail,
            address: address,
            turismo: turismo,
            omil: omil,
            fomento: fomento,
            academia: academia,
            joven: joven
        }, { where: { id: id } }
    ).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return user
}


users.create = create
users.findAll = findAll
users.findOneById = findOneById
users.findOneByName = findOneByName
users.destroy = destroy
users.update = update

module.exports = users
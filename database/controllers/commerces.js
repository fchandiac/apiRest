const { Commerces, Users, Categories } = require('../db')
const commerces = {}


async function create(
    rut,
    name,
    phone,
    mail,
    address,
    formalization,
    sii,
    description,
    whatsapp,
    instagram,
    facebook,
    map,
    latitude,
    length,
    emprende,
    emprende_pos,
    turismo,
    turismo_pos,
    user_id,
    category_id
) {
    const commerce = await Commerces.create({
        rut: rut,
        name: name,
        phone: phone,
        mail: mail,
        address: address,
        formalization: formalization,
        sii: sii,
        description: description,
        whatsapp: whatsapp,
        instagram: instagram,
        facebook: facebook,
        map: map,
        latitude: latitude,
        length: length,
        emprende: emprende,
        emprende_pos: emprende_pos,
        turismo: turismo,
        turismo_pos: turismo_pos,
        user_id: user_id,
        category_id: category_id

    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return commerce
}

async function findAll(){
    const commerce = await Commerces.findAll({
        include:[{model:Users}, {model:Categories} ],
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return commerce
}

async function findAllEmprende(){
    const commerce = await Commerces.findAll({
        where:{emprende : true},
        include:{model: Categories},
        order: [
            ['emprende_pos', 'ASC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return commerce
}

async function findAllTurismo(){
    const commerce = await Commerces.findAll({
        where:{turismo : true},
        include:{model: Categories},
        order: [
            ['turismo_pos', 'ASC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return commerce
}

async function update(
    id,
    rut,
    name,
    phone,
    mail,
    address,
    formalization,
    sii,
    description,
    whatsapp,
    instagram,
    facebook,
    map,
    latitude,
    length,
    emprende,
    emprende_pos,
    turismo,
    turismo_pos,
    category_id
    //sin user_id
){
    const commerce = await Commerces.update({
        rut: rut,
        name: name,
        phone: phone,
        mail: mail,
        address: address,
        formalization: formalization,
        sii: sii,
        description: description,
        whatsapp: whatsapp,
        instagram: instagram,
        facebook: facebook,
        map: map,
        latitude: latitude,
        length: length,
        emprende: emprende,
        emprende_pos: emprende_pos,
        turismo: turismo,
        turismo_pos: turismo_pos,
        category_id: category_id

    }, {
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return commerce
}

async function destroy(id){
    const commerce = await Commerces.destroy({
        where: {id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return commerce
}

commerces.create = create
commerces.findAll = findAll
commerces.findAllEmprende = findAllEmprende
commerces.findAllTurismo = findAllTurismo
commerces.update = update
commerces.destroy = destroy

module.exports = commerces
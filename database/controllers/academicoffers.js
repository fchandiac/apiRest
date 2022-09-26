const {Academicoffers} = require('../db')
const academicoffers = {}

async function create( name, type, description, mode, quota, start, end, place, inscription){
    const offer = await Academicoffers.create({
        name: name, 
        type: type, 
        description: description,
        mode: mode, 
        quota: quota, 
        start: start, 
        end: end, 
        place: place, 
        inscription: inscription
    })
    .then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function findAll(){
    const offer = await Academicoffers.findAll()
    .then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function destroy(id){
    const offer = await Academicoffers.destroy({
        where:{id:id}
    })
    .then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function update(id, name, type, description, mode, quota, start, end, place, inscription){
    const offer = await Academicoffers.update({
        name: name, 
        type: type, 
        description: description,
        mode: mode, 
        quota: quota, 
        start: start, 
        end: end, 
        place: place, 
        inscription: inscription
    }, {where: {id:id}})
    .then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

async function findAllByType(type){
    const offer = await Academicoffers.findAll({
        where:{type: type}
    }).then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return offer
}

academicoffers.create = create
academicoffers.findAll = findAll
academicoffers.destroy = destroy
academicoffers.update = update
academicoffers.findAllByType = findAllByType

module.exports = academicoffers
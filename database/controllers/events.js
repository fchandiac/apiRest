const { Events} = require('../db')
const events = {}
const sequelize = require('sequelize')

async function create(name, description, date, start, end, office){
    const event = await Events.create({
        name:name ,
        description: description ,
        date: date ,
        start: start,
        end: end,
        office: office
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return event
}

async function destroy(id){
    const event = await Events.destroy({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return event
}

async function findAllByDate(date){
    const event = await Events.findAll({
        where: {date: { [sequelize.Op.startsWith]: date }}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return event
}

async function findAllByTurismo(){
    const event = await Events.findAll({
        where:{office: 'Turismo'},
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return event
}


events.create = create
events.destroy = destroy
events.findAllByDate = findAllByDate
events.findAllByTurismo = findAllByTurismo

module.exports = events
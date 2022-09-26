const { Records, Profiles } = require('../db')
const records = {}


async function create(table, action, description, profile_id) {
    const record = await Records.create({
        table: table, action: action, description: description, profile_id: profile_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

async function findAll() {
    const record = await Records.findAll({
        include: { model: Profiles },
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

records.create = create
records.findAll = findAll

module.exports = records
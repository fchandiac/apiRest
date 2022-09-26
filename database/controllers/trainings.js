const { Trainings } = require('../db')
const trainings = {}

async function create(
    name,
    state,
    mode,
    totalhours,
    dayHours,
    startDate,
    endDate,
    benefits,
    schedule,
    requirements,
    dni,
    rsh,
    ce
) {
    const training = await Trainings.create({
        name: name,
        state: state,
        mode: mode,
        totalhours: totalhours,
        dayhours: dayHours,
        start: startDate,
        end: endDate,
        benefits: benefits,
        schedule: schedule,
        requirements: requirements,
        dni: dni,
        rsh: rsh,
        ce: ce
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return training
}

async function findAll() {
    const training = await Trainings.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return training
}

async function destroy(id) {
    const training = await Trainings.destroy({
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return training
}

async function update(
    id,
    name,
    state,
    mode,
    totalhours,
    dayHours,
    startDate,
    endDate,
    benefits,
    schedule,
    requirements,
    dni,
    rsh,
    ce
) {
    const training = await Trainings.update({
        name: name,
        state: state,
        mode: mode,
        totalhours: totalhours,
        dayhours: dayHours,
        start: startDate,
        end: endDate,
        benefits: benefits,
        schedule: schedule,
        requirements: requirements,
        dni: dni,
        rsh: rsh,
        ce: ce
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return training
}

trainings.create = create
trainings.findAll = findAll
trainings.destroy = destroy
trainings.update = update

module.exports = trainings
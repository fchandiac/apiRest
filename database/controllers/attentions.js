const { Attentions, Profiles, Users } = require('../db')
const attentions = {}

async function create(description, office, project, projectname, user_id, profile_id) {
    const attention = await Attentions.create({
        description: description,
        office: office,
        project: project,
        projectname: projectname,
        user_id,
        profile_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return attention
}

async function findAll() {
    const attention = await Attentions.findAll({
        include: [{ model: Profiles }, { model: Users }],
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return attention
}

async function destroy(id){
    const attention = await Attentions.destroy({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return attention
}

attentions.create = create
attentions.findAll = findAll
attentions.destroy = destroy

module.exports = attentions
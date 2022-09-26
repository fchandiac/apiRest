const {Reviews, Profiles, Users} = require('../db')
const reviews = {}

async function create( value, comment, user_id, profile_id){
    const review = await Reviews.create({
        value:value,
        comment:comment,
        user_id:user_id,
        profile_id:profile_id
    }).then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return review
}

async function findAll (){
    const review = await Reviews.findAll({
        include:[{model: Profiles}, {model: Users}]
    }).then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return review
}

async function findAllByUser(user_id){
    const review = await Reviews.findAll({
        include: { model: Profiles },
        where:{user_id:user_id},
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } })
    .catch(err => { return { 'code': 0, 'data': err } })
    return review
}



reviews.create = create
reviews.findAll = findAll
reviews.findAllByUser = findAllByUser

module.exports = reviews
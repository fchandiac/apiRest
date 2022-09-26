const { Images} = require('../db')
const images = {}

async function createCommerceImg(url, commerce_id){
    const image = await Images.create({
        url: url,
        commerce_id: commerce_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

async function createSiteImg(url, site_id){
    const image = await Images.create({
        url: url,
        site_id: site_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

async function createRouteImg(url, route_id){
    const image = await Images.create({
        url: url,
        route_id: route_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

async function findCommerceImgs(commerce_id){
    const image = await Images.findAll({
        where:{commerce_id: commerce_id},
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

async function findSiteImgs(site_id){
    const image = await Images.findAll({
        where:{site_id: site_id},
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

async function findRouteImgs(route_id){
    const image = await Images.findAll({
        where:{route_id: route_id},
        order: [
            ['created_at', 'DESC'],
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

async function destroy(id){
    const image = await Images.destroy({
        where:{id:id}
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return image
}

images.createCommerceImg = createCommerceImg
images.findCommerceImgs = findCommerceImgs
images.destroy = destroy
images.createSiteImg = createSiteImg
images.findSiteImgs = findSiteImgs
images.createRouteImg = createRouteImg
images.findRouteImgs = findRouteImgs

module.exports = images